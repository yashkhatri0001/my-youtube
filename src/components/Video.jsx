import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

function Video({ video }) {
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div>
          <div
            className="relative
          h-48
          md:h-56
          md:rounded-xl
          hover:rounded-none
          duration-200
          overflow-hidden"
          >
            <img
              className="h-full w-full"
              src={video?.thumbnails[0]?.url}
              alt=""
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div className="flex  space-x-2 mb-6">
            <div className="flex h-9 w-12  rounded-full overflow-hidden border">
              <img
                className="h-full  rounded-full overflow-hidden border-none"
                src={video?.author?.avatar[0].url}
                alt=""
              />
            </div>
            <span className="text-sm font-bold line-clamp-2">
              {video?.title}
            </span>
          </div>
          <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
            {video?.author?.title}
            {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
              <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
            )}
          </span>
          <div className="flex text-gray-500 text-[12px]">
            <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
            <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
              .
            </span>
            <span>{video?.publishedTimeText}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
