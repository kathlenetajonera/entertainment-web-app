import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

type Props = {
    label: string;
};

const EmptyPlaceholder = ({ label }: Props) => {
    return (
        <div className="bg-navbar h-[calc(100vh-6rem)] flex flex-col items-center justify-center rounded-lg ">
            <div className="block">
                <FontAwesomeIcon icon={faInbox} size="3x" color="#5A698F" />
            </div>
            <p className="text-[#5A698F] mt-2">{label}</p>
        </div>
    );
};

export default EmptyPlaceholder;
