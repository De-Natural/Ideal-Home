

const AddedApartment = ({
  image,
  tag,
  title,
  description,
}) =>{
    return(
       <div className="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col gap-5">
            <div className="relative">
                <img
                src={image}
                className="h-48 w-full object-cover"
                />

            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-4">
                <div className="flex items-center gap-6">
                    <span className="font-medium text-base md:text-3xl leading-10 tracking-normal align-middle font-[inter] mb-1 text-left">
                    {tag}
                    </span>
                    <h3 className="font-medium text-base md:text-3xl leading-10 tracking-normal align-middle font-[inter] mb-1 text-left">{title}</h3>
                </div>

                <p className="text-[#333] text-[8px] md:text-base not-italic font-normal leading-6 align-middle text-left">{description}</p>
            </div>
       </div>
    )
}
export default AddedApartment