import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay
} from "@chakra-ui/react";
import useProductStore from "../store/productStore";
import { HomeCategoryType } from "../types/category.types";
import { Link } from "react-router-dom";

type DrawerProps = {
    view: boolean;
    handleView: () => void;
};

const CategoryDrawer = ({ view, handleView }: DrawerProps) => {
    const {categories} = useProductStore()
    return (
        <>
            <Drawer isOpen={view} placement="left" onClose={handleView}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Categories</DrawerHeader>
                    <DrawerBody>
                        {categories &&
                            categories.map((category : HomeCategoryType) =>
                                <div 
                                    key={category._id}
                                    className="group"
                                >
                                    <Link 
                                        to={`/category/${category._id}`}
                                        className="block w-full py-2 border-b"
                                    >
                                        {category.name}
                                    </Link>
                                    <div
                                        className="hidden group-hover:flex flex-col ml-2 my-2"
                                    >
                                        {
                                            category.typeItems.map(product=>
                                                <Link
                                                    to={`/product/${product._id}`}
                                                    className="p-2 hover:bg-green-500 hover:text-white border-b"
                                                >
                                                    {product.name}
                                                </Link>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default CategoryDrawer;
