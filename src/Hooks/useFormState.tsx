import { useState, ChangeEvent } from 'react';

/**
 * Custom hook to manage form state.
 *
 * @template T - The type of the form state object.
 * @param {T} initialState - The initial state of the form.
 * @returns {[T, (event: ChangeEvent<HTMLInputElement>) => void]} - An array containing the form state and a change handler function.
 *
 * @example
 * const [formState, handleChange] = useFormState({ name: '', email: '' });
 *
 * <input id="name" value={formState.name} onChange={handleChange} />
 * <input id="email" value={formState.email} onChange={handleChange} />
 */
const useFormState = <T extends Record<string, any>>(initialState: T) => {
    const [formState, setFormState] = useState<T>(initialState);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setFormState((prev) => ({
            ...prev,
            [id]: value
        }));
        console.log(formState);
    };

    return [formState, handleChange] as const;
};

export default useFormState;