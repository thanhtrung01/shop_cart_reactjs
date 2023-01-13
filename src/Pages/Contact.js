import React from "react";
import GoogleMapReact from "google-map-react";
import { useForm } from "react-hook-form";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = ({ center, zoom }) => {

  const { register, formState: { errors }, handleSubmit} = useForm();
  const onSubmit = data => console.log(data);


  return (
    <div className="grid px-2 lg:px-6 grid-cols-1 md:grid-cols-2 lg:max-w-7xl max-w-2xl mx-auto contact my-16">
      <div className="w-full md:w-11/12 flex items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                {...register("firstName", { required: true})}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="firstName"
                type="text"
                placeholder="Jane"
              />
              {errors.firstName?.type && (<p className="text-xs italic text-red-600">Please fill out this field.</p>)}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                 {...register("lastName", { required: true})}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lastName"
                type="text"
                placeholder="Doe"
              />
              {errors.lastName?.type && (<p className="text-xs italic text-red-600">Please fill out this field.</p>)}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                E-mail
              </label>
              <input
              {...register("email", { required: true, pattern: /^[A-Za-z]+$/i })}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="text"
              />
              {errors.email?.type === 'required' && ( <p className="text-red-600 text-xs italic">
                Email is required
              </p>)}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Message
              </label>
              <textarea
              {...register("message" , {required: true})}
                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
                defaultValue={""}
              />
              {errors.message?.type && (<p className="text-xs italic text-red-600">Please fill out this field.</p>)}
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3" />
          </div>
        </form>
      </div>

      <div className="w-full contact-google-map">
        <GoogleMapReact defaultCenter={center} defaultZoom={zoom}>
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    </div>
  );
};

Contact.defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
};

export default Contact;
