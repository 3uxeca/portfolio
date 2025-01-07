import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  unoptimized?: boolean;
  fill?: boolean;
  width?: string;
  height?: string;
};

const CustomImage = ({ src, alt, sizes, unoptimized, fill, width, height }: Props) => {
  return (
    <Image
      priority
      loader={() => src}
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes={sizes || '100%'}
      style={{ width: width ? width : '100%', height: height ? height : '100%' }}
      unoptimized={unoptimized || true}
      fill={fill || false}
    />
  );
};

export default CustomImage;
