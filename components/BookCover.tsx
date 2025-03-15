import Image from 'next/image'

type Props = {
  cover: string;
  variant: 'small' | 'medium' | 'regular' | 'large';
};

const VariantStyles = {
  small: 'w-[55px] h-[76px]',
  medium: 'w-[144px] h-[199px]',
  regular:
    'xs:w-[174px] w-[114px] xs:h-[239px] h-[169px] md:w-[144px] md:h-[199px]',
  large: 'xs:w-[296px] w-[256px] xs:h-[404px] h-[354px]'
}

const BookCover = ({ cover, variant }: Props) => {
  return (
    <div className={`relative ${VariantStyles[variant]}`}>
      <div className="absolute z-10" style={{ width: '87.5%', height: '88%' }}>
        <Image src={cover} alt="Book cover" fill />
      </div>
    </div>
  )
}
export default BookCover
