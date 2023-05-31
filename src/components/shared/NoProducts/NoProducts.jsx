import React from "react";
import { Link } from "react-router-dom";

const NoProducts = ({ searchString }) => {
    return (
        <div style={{ width: "100%" }}>
            {!searchString ? (
                <div>
                    <span>{"Если вы не нашли нужный товар, напишите "}</span>
                    <Link to={"https://t.me/vario_support"} target="_blank">
                        нам
                    </Link>
                </div>
            ) : (
                <>No products find by query: "{searchString}"</>
            )}
        </div>
    );
};

export default NoProducts;
