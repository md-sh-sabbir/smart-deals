import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
// import useAxios from '../../hooks/useAxios,';

const CreateAProduct = () => {

    const { user } = useAuth()
    // const axiosInstance = useAxios()
    const axiosSecure = useAxiosSecure()

    const handleCreateAProduct = e => {
        e.preventDefault()
        const title = e.target.title.value
        const image = e.target.image.value
        const minPrice = e.target.minPrice.value
        const maxPrice = e.target.maxPrice.value
        console.log(title, image, minPrice, maxPrice);

        const newProduct = { title, image, minPrice, maxPrice, email: user.email, seller_name: user.displayName }

        // axios.post('https://smart-deals-api-server-kappa-five.vercel.app/products', newProduct)
        //     .then(data => {
        //         console.log(data.data);
        //         if (data.data.insertedId) {
        //             Swal.fire({
        //                 position: "center",
        //                 icon: "success",
        //                 title: "Your product has been created.",
        //                 showConfirmButton: false,
        //                 timer: 1500,
        //             });
        //         }
        //     })

        // axiosInstance.post('/products', newProduct)
        //     .then(data => {
        //         console.log(data.data);
        //         if (data.data.insertedId) {
        //             Swal.fire({
        //                 position: "center",
        //                 icon: "success",
        //                 title: "Your product has been created.",
        //                 showConfirmButton: false,
        //                 timer: 1500,
        //             });
        //         }
        //     })

        axiosSecure.post('/products', newProduct)
            .then(data => {
                console.log('after secure call', data.data);
            })
    }

    return (
        <div className="lg:w-1/2 mx-auto">
            <form onSubmit={handleCreateAProduct}>
                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name="title" className="input" />
                    {/* email */}
                    <label className="label">Image URL</label>
                    <input type="text" className="input" name="image" />
                    {/* bid amount */}
                    <label className="label">Min Price</label>
                    <input
                        type="text"
                        name="minPrice"
                        className="input"
                        placeholder="Min Price"
                    />
                    {/* bid amount */}
                    <label className="label">Max Price</label>
                    <input
                        type="text"
                        name="maxPrice"
                        className="input"
                        placeholder="Max Price"
                    />
                    <button className="btn btn-neutral mt-4">Add Product</button>
                </fieldset>
            </form>
        </div>
    );
};

export default CreateAProduct;