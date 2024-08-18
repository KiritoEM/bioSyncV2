import { CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { Card, Skeleton } from "@nextui-org/react";
import { FC } from "react";

export interface IskeletonMap {
  size?: { width: string; height: string };
}

const PostSkeleton: FC = (): JSX.Element => {
  return (
    <Card radius="sm" className="post-card shadow-none p-1 bg-white mb-5">
      <CardHeader>
        <div className="flex gap-3">
          <Skeleton className="h-[45px] w-[45px] rounded-full"></Skeleton>
          <Skeleton className="h-[45px] w-[75px] rounded-lg"></Skeleton>
        </div>
      </CardHeader>
      <CardBody>
        <Skeleton className="h-[305px] w-full rounded-lg"></Skeleton>
      </CardBody>
      <CardFooter>
        <Skeleton className="h-[45px] w-full rounded-lg"></Skeleton>
      </CardFooter>
    </Card>
  );
};

const MapSkeleton: FC<IskeletonMap> = ({ size }): JSX.Element => {
  const width = size?.width ?? "full";
  const height = size?.height ?? "screen";
  return <Skeleton className={`w-${width} h-${height} rounded-lg`}></Skeleton>;
};

export { PostSkeleton, MapSkeleton };
