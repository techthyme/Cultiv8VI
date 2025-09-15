import useSWR from 'swr';
import { Farm, Product } from '@/types';

interface UseFarmsOptions {
  location?: string;
  certified?: boolean;
  specialty?: string;
}

interface FarmsResponse {
  success: boolean;
  data: Farm[];
  total: number;
  type: 'list';
  error?: string;
}

interface FarmResponse {
  success: boolean;
  data: Farm | null;
  type: 'single';
  error?: string;
}

interface ProductsFromFarmsResponse {
  success: boolean;
  data: (Product & { farmer: string; farmerLocation: string })[];
  total: number;
  error?: string;
}

// Fetcher function for farms list
const farmsFetcher = async (url: string): Promise<FarmsResponse> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch farms data');
  }
  return response.json();
};

// Fetcher function for single farm
const farmFetcher = async (url: string): Promise<FarmResponse> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch farm data');
  }
  return response.json();
};

// Fetcher for POST requests (products from farms)
const postFetcher = async ([url, body]: [string, object]): Promise<ProductsFromFarmsResponse> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch products from farms');
  }
  
  return response.json();
};

// Build URL with query parameters for farms
const buildFarmsUrl = (options: UseFarmsOptions = {}) => {
  const params = new URLSearchParams();
  
  if (options.location && options.location !== 'all') {
    params.append('location', options.location);
  }
  
  if (options.certified) {
    params.append('certified', 'true');
  }
  
  if (options.specialty && options.specialty.trim()) {
    params.append('specialty', options.specialty.trim());
  }

  const queryString = params.toString();
  return `/api/farms${queryString ? `?${queryString}` : ''}`;
};

// Hook for fetching all farms
export function useFarms(options: UseFarmsOptions = {}) {
  const url = buildFarmsUrl(options);
  
  const { data, error, isLoading, mutate } = useSWR<FarmsResponse>(
    url,
    farmsFetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute
      refreshInterval: 0,
      errorRetryCount: 3,
      errorRetryInterval: 1000,
    }
  );

  return {
    farms: data?.data || [],
    total: data?.total || 0,
    isLoading,
    isError: error,
    mutate,
  };
}

// Hook for fetching a single farm by ID
export function useFarm(farmId: number) {
  const { data, error, isLoading, mutate } = useSWR<FarmResponse>(
    farmId ? `/api/farms?farmId=${farmId}` : null,
    farmFetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 300000, // 5 minutes for individual farms
    }
  );

  return {
    farm: data?.data,
    isLoading,
    isError: error,
    mutate,
  };
}

// Hook for fetching products from all farms (for marketplace)
export function useProductsFromFarms(options: {
  category?: string;
  search?: string;
  location?: string;
} = {}) {
  const { data, error, isLoading, mutate } = useSWR(
    ['/api/farms', options],
    postFetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000,
      refreshInterval: 0,
      errorRetryCount: 3,
      errorRetryInterval: 1000,
    }
  );

  return {
    products: data?.data || [],
    total: data?.total || 0,
    isLoading,
    isError: error,
    mutate,
  };
}