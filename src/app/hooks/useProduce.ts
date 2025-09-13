import useSWR from 'swr';
import { Produce } from '../types';

interface UseProduceOptions {
  category?: string;
  search?: string;
  location?: string;
}

interface ProduceResponse {
  success: boolean;
  data: Produce[];
  total: number;
  error?: string;
}

// Fetcher function for SWR
const fetcher = async (url: string): Promise<ProduceResponse> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch produce data');
  }
  return response.json();
};

// Build URL with query parameters
const buildUrl = (options: UseProduceOptions = {}) => {
  const params = new URLSearchParams();
  
  if (options.category && options.category !== 'all') {
    params.append('category', options.category);
  }
  
  if (options.search && options.search.trim()) {
    params.append('search', options.search.trim());
  }
  
  if (options.location && options.location !== 'all') {
    params.append('location', options.location);
  }

  const queryString = params.toString();
  return `/api/produce${queryString ? `?${queryString}` : ''}`;
};

export function useProduce(options: UseProduceOptions = {}) {
  const url = buildUrl(options);
  
  const { data, error, isLoading, mutate } = useSWR<ProduceResponse>(
    url,
    fetcher,
    {
      // Cache configuration
      revalidateOnFocus: false, // Don't refetch when window regains focus
      revalidateOnReconnect: true, // Refetch when connection is restored
      dedupingInterval: 60000, // Dedupe requests within 60 seconds
      refreshInterval: 0, // No automatic polling
      errorRetryCount: 3, // Retry failed requests 3 times
      errorRetryInterval: 1000, // Wait 1 second between retries
    }
  );

  return {
    produce: data?.data || [],
    total: data?.total || 0,
    isLoading,
    isError: error,
    mutate, // Allows manual revalidation
  };
}

// Hook for fetching a single produce item
export function useProduceItem(id: number) {
  const { data, error, isLoading, mutate } = useSWR<{ success: boolean; data: Produce }>(
    id ? `/api/produce/${id}` : null,
    async () => {
      const response = await fetch('/api/produce', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch produce item');
      }
      
      return response.json();
    },
    {
      revalidateOnFocus: false,
      dedupingInterval: 300000, // 5 minutes for individual items
    }
  );

  return {
    produce: data?.data,
    isLoading,
    isError: error,
    mutate,
  };
}