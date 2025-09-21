
// export default async function HomeServer() {
//   await new Promise((r) => setTimeout(r, 1500)); // simulate load
//   return <div>Home</div>;
// }

export default async function HomeServer({
  children,
}: { children: React.ReactNode }) {
  await new Promise(resolve => setTimeout(resolve, 2000)); // 2s delay
  return <>{children}</>;
}