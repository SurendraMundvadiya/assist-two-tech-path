import React, { useEffect, useState } from "react";
import Coments from "../api/Coments";
import Environment from "../Environment";
import { FixedSizeList as List } from "react-window";
import AutoSixer from "react-virtualized-auto-sizer";

const random_sprit = [
    // "male",
    "female",
    // "human",
    // "identicon",
    // "initials",
    // "bottts",
    // "avataaars",
    // "jdenticon",
    // "gridy",
    // "micah",
];

const get_sprit = () => random_sprit[Math.floor(Math.random() * random_sprit.length)];

const ComentsPage = () => {
    const [coments, setComents] = useState([]);
    useEffect(() => {
        Coments.getComments()
            .then((res) => {
                if (res.status === 200) {
                    console.log(res);
                    setComents(res.data);
                } else {
                    setComents([]);
                }
            })
            .catch((err) => {
                console.log(err.messages);
            });
    }, []);
    const Row = (props) => {
        const { index, style } = props;

        const el = coments[index];
        return (
            <div style={style} key={index}>
                <div className="container mx-auto flex items-center p-2 w-full  my-4 ">
                    <img
                        alt="ecommerce"
                        className="object-cover object-center w-20 h-20 block border-2 rounded-full"
                        // src={Environment.IMAGE_URL + "/" + get_sprit() + "/" + el.name + ".svg"}
                        src={
                            Environment.IMAGE_URL +
                            "/" +
                            "avataaars" +
                            "/" +
                            el.name +
                            ".svg?mood=happy&background=%23fff"
                        }
                    />
                    <div className="ml-4">
                        <h2 className="text-gray-900 title-font text-lg font-medium">{el.name}</h2>
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mt-1">
                            {el.email}
                        </h3>
                        <p className="mt-1 w-5/6 ">{el.body}</p>
                    </div>
                </div>
                <div className="h-px bg-gray-300"></div>
            </div>
        );
    };
    return (
        <div className="h-5/6 w-3/6 overflow-y-auto  border-2 rounded p-2">
            {/* {coments.map((el) => {
                return (
                    <>
                        <div className="container mx-auto flex items-center p-2 w-full  my-4 ">
                            <img
                                alt="ecommerce"
                                className="object-cover object-center w-20 h-20 block border-2 rounded-full"
                                src={Environment.IMAGE_URL + "/" + el.name + ".svg"}
                            />
                            <div className="ml-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">
                                    {el.name}
                                </h2>
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mt-1">
                                    {el.email}
                                </h3>
                                <p className="mt-1 w-5/6 ">{el.body}</p>
                            </div>
                        </div>
                        <div className="h-px bg-gray-300"></div>
                    </>
                );
            })} */}
            <AutoSixer>
                {({ height, width }) => {
                    return (
                        <List
                            height={height}
                            itemCount={coments.length}
                            itemSize={176}
                            width={width}
                        >
                            {Row}
                        </List>
                    );
                }}
            </AutoSixer>
        </div>
    );
};

export default ComentsPage;
