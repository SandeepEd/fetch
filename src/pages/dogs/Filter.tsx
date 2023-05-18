import React, { useState } from 'react';

interface IFilterComponentProps {
    breeds?: string[];
    handleFilter: (newFilter: Dogs.ISearchParams) => void;
    filter: Dogs.ISearchParams;
}
const FilterComponent: React.FC<IFilterComponentProps> = ({ breeds, handleFilter, filter }) => {

    const submitFilter = (data: any) => {
        handleFilter(data);
    };

    return (
        <div className="w-screen flex flex-row justify-center items-center pt-4">
            <div className="flex flex-col md:flex-row">
                <div className="mb-3 md:mb-0 md:mr-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="breed">
                        Breed
                    </label>
                    <select
                        id="breed"
                        value={filter.breeds}
                        onChange={(e) => handleFilter(
                            {
                                breeds: filter.breeds ?
                                    [e.target.value] :
                                    [e.target.value]
                            })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select a Breed</option>
                        {breeds?.map((breed, index) => (
                            <option key={index} value={breed}>{breed}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-3 md:mb-0 md:mr-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="minAge">
                        Min Age
                    </label>
                    <input
                        type="number"
                        id="minAge"
                        value={filter.ageMin}
                        onChange={(e) =>
                            handleFilter(
                                { ageMin: e.currentTarget.value ? Number(e.currentTarget.value) : undefined }
                            )}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                    />
                </div>

                <div className="mb-3 md:mb-0 md:mr-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="maxAge">
                        Max Age
                    </label>
                    <input
                        type="number"
                        id="maxAge"
                        value={filter.ageMax}
                        onChange={(e) =>
                            handleFilter(
                                { ageMax: e.currentTarget.value ? Number(e.currentTarget.value) : undefined }
                            )
                        }
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                    />
                </div>

                <div className="mb-3 md:mb-0 md:mr-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zipcode">
                        Zipcode
                    </label>
                    <input
                        type="text"
                        id="zipcode"
                        value={filter?.zipCodes?.[0]}
                        onChange={(e) =>
                            handleFilter(
                                { zipCodes: e.currentTarget.value ? [Number(e.currentTarget.value)] : undefined }
                            )
                        }
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                    />
                </div>
            </div>

        </div>
    );
};

export default FilterComponent;
