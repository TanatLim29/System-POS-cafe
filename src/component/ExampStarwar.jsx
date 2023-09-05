import React, { useState , useEffect} from "react";
import { Card, CardContent, Input } from "@mui/joy";
import axios from "axios";
import Result from "postcss/lib/result";


const ExampStarwar = () => {
    const [starWarPeople, setStarWarPeople] = useState([]);
    
    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             const response = await axios.get("https://swapi.dev/api/people/")
    //             getData(response?.data?.results);
    //         } catch (err) {
    //             console.error(err.message);
    //         }
    //     };
    // }, []);

    useEffect(() => {
        axios
            .get("https://swapi.dev/api/people/")
            .then((res) => {
                console.log('People', res.data);
            })
            .catch((error) => {
                console.log('Error', error?.message);
            });;
        return () => { };
    }, []);

  return (
    <div className="mx-4">
          {starWarPeople?.map((eachPeople, index) => (
              <Card key={index} className="my-2">
                  <CardContent>
                      <div className="flex">
                          <div className="w-1/3" />
                          <div className="w-2/3">
                              <li>Name: {eachPeople?.name}</li>
                              <li>Height: {eachPeople?.height}</li>
                              <li>Mass: {eachPeople?.mass}</li>
                          </div>
                      </div>
                  </CardContent>
            </Card>
        ))}
    </div>
  )
}

export default ExampStarwar