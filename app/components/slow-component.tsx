"use server";

export async function SlowComponent() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <div>This is a dynamic (and slow) route</div>;
}
