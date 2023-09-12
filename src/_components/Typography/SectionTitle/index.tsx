type Props = {
    children: string;
};

const SectionTitle = ({ children }: Props) => {
    return <h1 className="text-3xl font-extralight">{children}</h1>;
};

export default SectionTitle;
