import { LazyImage } from "../lazyImage/lazyImage";

export type TCardData = {
  url: string;
  thumbnailUrl: string;
  title: string;
}

export type TProps = {
  cardData: TCardData;
  width?: number;
  removeImage: (a:any) => () => void;
}

export const Card = ({ cardData, width = 200, removeImage = (data) => () => {} }: TProps) => {
  return (
    <div className={`rounded-xl w-[${width}px] overflow-hidden p-xs bg-yellow-500
    border-2 border-solid border-yellow-800
    hover:shadow-[0_0px_12px_-2px_rgba(1,1,1,1)] shadow-[0_12px_-2px_rgba(234,179,0,1)] relative`}>
      <a
        className={``}
        href={cardData.url}
      >
        <LazyImage
          src={cardData.thumbnailUrl}
          loading="lazy"
          alt="Image"
          width={width}
          height={width}
        />
        <h3 className="text-pretty text-center m-4">{cardData.title}</h3>
      </a>
      <button className="absolute top-0 right-0 border-2 rounded-full w-8 h-8 bg-gray-50" onClick={removeImage(cardData)}>X</button>
    </div>
  );
};
