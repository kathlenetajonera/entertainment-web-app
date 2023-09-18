import Card from '../Card';
import { ShowType } from '../Card/types';
import SectionTitle from '../Typography/SectionTitle';

type Props = {
    title: string;
    list: ShowType[];
    customClass?: string;
};

const Section = ({ title, list, customClass }: Props) => {
    return (
        <div className={customClass || 'mt-12'}>
            <SectionTitle>{title}</SectionTitle>

            <div className="grid grid-cols-fluid gap-10 mt-8">
                {list.map((item: ShowType) => {
                    return <Card key={item.id} data={item} />;
                })}
            </div>
        </div>
    );
};

export default Section;
