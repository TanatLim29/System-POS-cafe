import React, { useState , useEffect} from "react";
import { Card, CardContent, Input } from "@mui/joy";



const Search = () => {
    const [searchTerm, setSeatchTerm] = useState("");
    
    useEffect(() => {
        return () => { };
    }, [searchTerm]);

    return (
        <div>
            <Card>
                <CardContent>
                    <div>Search Box</div>
                    <Input
                        placeholder="Input some search word"
                        onChange={(e) => setSeatchTerm(e?.target?.value)}
                    />
                    <div>
                        You Search <span className="text-blue-500"> {searchTerm}</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );

}
export default Search;