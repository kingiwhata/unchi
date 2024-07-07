import { useFormStatus } from 'react-dom';

export function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button
            className="p-2 w-1/2 text-2xl font-bold rounded-lg"
            type="submit"
        >
            {pending ? 'Saving...' : 'Save'}
        </button>
    );
}
