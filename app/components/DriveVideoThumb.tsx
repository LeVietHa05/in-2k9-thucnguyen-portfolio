import Image from "next/image";

export default function DriveVideoCard({fileId}: { fileId: string }) {
  const FILE_ID = fileId; // Thay ID của bạn vào đây
  const videoUrl = `https://drive.google.com/file/d/${FILE_ID}/view?usp=sharing`;
  const thumbnailUrl = `https://lh3.googleusercontent.com/d/${FILE_ID}`;
  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full aspect-video overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      {/* Ảnh Thumbnail */}
      <Image
        src={thumbnailUrl}
        alt="Video thumbnail"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Lớp phủ mờ & Nút Play */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
        <div className="w-16 h-16 bg-white/90 group-hover:bg-white text-gray-900 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          {/* Icon Play SVG */}
          <svg
            className="w-8 h-8 fill-current translate-x-0.5"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </a>
  );
}
