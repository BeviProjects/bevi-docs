type SkeletonProps = {
  size?: string;
  className?: string;
};

export const Skeleton = ({ size, className }: SkeletonProps) => {
  return (
    <div
      className={`rounded-md block ${size ?? "size-5xl"} bg-gray-85 animate-pulse ${className}`}
    />
  );
};
