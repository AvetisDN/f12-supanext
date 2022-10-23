import React from "react";

const AddNew = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    <aside className=" w-72 bg-neutral-50 dark:bg-neutral-900 shadow rounded-lg p-6">
      <h3 className="text-lg font-bold">Add New</h3>
      <form className="flex flex-col gap-5 mt-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-control"
          placeholder="Name"
          name="name"
          required
          onChange={handleInputChange}
          value={formData.name}
        />
        <textarea
          type="text"
          className="input-control resize-none"
          placeholder="Activity"
          name="activity"
          required
          onChange={handleInputChange}
          value={formData.activity}
        />
        <label>
          Start Date
          <input
            type="date"
            className="input-control w-full"
            placeholder="Start Date"
            name="start_date"
            required
            onChange={handleInputChange}
            value={formData.start_date}
          />
        </label>
        <label>
          End Date
          <input
            type="date"
            className="input-control w-full"
            placeholder="End Date"
            name="end_date"
            required
            onChange={handleInputChange}
            value={formData.end_date}
          />
        </label>
        <button className="bg-emerald-500 text-neutral-100 dark:bg-emerald-300 dark:text-neutral-900 p-4 rounded-md font-semibold uppercase tracking-wide transition-colors hover:bg-emerald-400 active:bg-emerald-600 dark:hover:bg-emerald-200 dark:active:bg-emerald-400">
          Add
        </button>
      </form>
    </aside>
  );
};

export default AddNew;
