import Image from 'next/image'
import { components } from '@/src/api/types'

type Props = {
	cover: components['schemas']['Book']['cover']
	variant: 'small' | 'medium' | 'regular' | 'large'
}

const VariantStyles = {
	small: 'w-[55px] h-[76px]',
	medium: 'w-[144px] h-[199px]',
	regular: 'xs:w-[174px] w-[114px] xs:h-[239px] h-[169px] md:w-[144px]',
	large: 'xs:w-[296px] w-[256px] xs:h-[404px] h-[354px]'
}

const BookCover = ({ cover, variant }: Props) => {
	return (
		<div className={`p-4 bg-[#e0dcc9]`}>
			{cover ? (
				<Image
					src={cover}
					alt='Book cover'
					layout='intrinsic'
					width={224}
					height={0}
					objectFit='contain'
				/>
			) : null}
		</div>
	)
}
export default BookCover
