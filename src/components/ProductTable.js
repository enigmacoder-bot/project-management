import React, { useState, useRef } from "react";

const ProductTable = () => {
    const [columns, setColumns] = useState([
        { id: 1, label: "Product Name", width: 250 },
        { id: 2, label: "Color", width: 150 },
        { id: 3, label: "Category", width: 200 },
        { id: 4, label: "Price", width: 100 },
    ]);

    const resizingColumn = useRef(null);

    const handleMouseDown = (e, index) => {
        resizingColumn.current = {
            index,
            startX: e.clientX,
            startWidth: columns[index].width,
        };
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e) => {
        if (!resizingColumn.current) return;

        const { index, startX, startWidth } = resizingColumn.current;
        const newWidth = Math.max(80, startWidth + (e.clientX - startX)); // Minimum width 80px

        setColumns((prevColumns) =>
            prevColumns.map((col, i) =>
                i === index ? { ...col, width: newWidth } : col
            )
        );
    };

    const handleMouseUp = () => {
        resizingColumn.current = null;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    };

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {columns.map((col, index) => (
                            <th
                                key={col.id}
                                className="px-6 py-3 relative border border-gray-300 dark:border-gray-600"
                                style={{ width: col.width }}
                            >
                                {col.label}
                                <div
                                    onMouseDown={(e) => handleMouseDown(e, index)}
                                    className="absolute right-0 top-0 w-2 h-full cursor-col-resize bg-gray-400 opacity-50 hover:opacity-100"
                                />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td
                            className="px-6 py-4 border"
                            style={{ width: columns[0].width }}
                        >
                            Apple MacBook Pro 17"
                        </td>
                        <td
                            className="px-6 py-4 border"
                            style={{ width: columns[1].width }}
                        >
                            Silver
                        </td>
                        <td
                            className="px-6 py-4 border"
                            style={{ width: columns[2].width }}
                        >
                            Laptop
                        </td>
                        <td
                            className="px-6 py-4 border"
                            style={{ width: columns[3].width }}
                        >
                            $2999
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td
                            className="px-6 py-4 border"
                            style={{ width: columns[0].width }}
                        >
                            Microsoft Surface Pro
                        </td>
                        <td
                            className="px-6 py-4 border"
                            style={{ width: columns[1].width }}
                        >
                            White
                        </td>
                        <td
                            className="px-6 py-4 border"
                            style={{ width: columns[2].width }}
                        >
                            Laptop PC
                        </td>
                        <td
                            className="px-6 py-4 border"
                            style={{ width: columns[3].width }}
                        >
                            $1999
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <td
                            className="px-6 py-4 border"
                            style={{ width: columns[0].width }}
                        >
                            Magic Mouse 2
                        </td>
                        <td
                            className="px-6 py-4 border"
                            style={{ width: columns[1].width }}
                        >
                            Black
                        </td>
                        <td
                            className="px-6 py-4 border"
                            style={{ width: columns[2].width }}
                        >
                            Accessories
                        </td>
                        <td
                            className="px-6 py-4 border"
                            style={{ width: columns[3].width }}
                        >
                            $99
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;