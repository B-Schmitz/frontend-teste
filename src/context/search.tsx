import { createContext, useContext, useState } from "react";

interface SearchContext {
    search: string;
    setValue: (search: string) => void;
}

const Context = createContext<SearchContext>({ search: '', setValue: () => {} });

export function useSearch(): SearchContext {
    return useContext(Context);
}

interface Props {
    children: any;
}

export function ContextSearch(p: Props) {
    const [search, setValue] = useState("");

    return (
        <Context.Provider value={{ search, setValue }}>
            {p.children}
        </Context.Provider>
    );
}