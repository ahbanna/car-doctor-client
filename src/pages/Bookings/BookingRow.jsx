import React from "react";

const BookingRow = ({ booking }) => {
  const { name, date, email, img } = booking;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-12 h-12">
            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{date}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default BookingRow;
