const Card = ({ image, url, title, description }) => {
  return (
    <a href={url} target="_blank" className="max-w-sm max-h-[70vh]  text-black">
      <div className="flex justify-center items-center">
        <img
          className="md:h-[50vh] h-[30vh] object-cover  aspect-ratio"
          src={!image ? "/no-image.jpg" : image}
          alt=""
        />
      </div>

      <div className="pt-2">
        <h5 className="mb-2 md:text-xl text-lg font-bold line-clamp-2 overflow-ellipsis">
          {title}
        </h5>

        <p className="mb-3 text-sm md:text-base text-gray-700 line-clamp-3 overflow-ellipsis">
          {description}
        </p>
      </div>
    </a>
  );
};

export default Card;
