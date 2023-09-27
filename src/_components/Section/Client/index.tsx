import ClientCard from '@/_components/Card/Client';
import { ShowType } from '../../Card/types';
import SectionTitle from '../../Typography/SectionTitle';

type Props = {
    title: string;
    list: ShowType[];
    customClass?: string;
};

const ClientSection = ({ title, list, customClass }: Props) => {
    return (
        <div className={customClass || 'mt-12'}>
            <SectionTitle>{title}</SectionTitle>

            <div className="grid grid-cols-fluid gap-10 mt-8 md:mt-6 md:gap-6">
                {list.map((item: ShowType) => {
                    return <ClientCard key={item.id} data={item} />;
                })}
            </div>
        </div>
    );
};

export default ClientSection;
