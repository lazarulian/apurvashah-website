import ScrollArea from "./scroll-area";
import Video from "./video";

const VideoGallery = ({
  videos,
}: {
  videos: {
    title: string;
    src: string;
  }[];
}) => {
  return (
    <ScrollArea className="relative mx-3 md:w-[calc(100%+100px)] before:absolute before:h-full before:w-px before:bg-gray-800 before:top-0 before:-left-2 after:absolute after:h-full after:w-px after:bg-gray-800 after:top-0 after:-right-2">
      <div className="flex w-full h-full gap-x-2">
        {videos.map((video) => (
          <Video
            key={video.title}
            src={video.src}
            className="first:ml-1 last:mr-1"
          />
        ))}
      </div>
    </ScrollArea>
  );
};

export default VideoGallery;
