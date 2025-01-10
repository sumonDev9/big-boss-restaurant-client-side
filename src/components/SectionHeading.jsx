

const SectionHeading = ({heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-6/12 text-center">
            <p className="text-[#D99904] text-xl">---{subHeading}---</p>
            <h3 className="text-[#151515] border-y-4 text-4xl py-4">{heading}</h3>
        </div>
    );
};

export default SectionHeading;