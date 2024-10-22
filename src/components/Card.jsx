import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({ data }) {
  const tagColorClass = {
    green: 'bg-green-600',
    blue: 'bg-blue-600',
    yellow: 'bg-yellow-600',
    red: 'bg-red-600',
    purple: 'bg-purple-600',
    orange: 'bg-orange-600',
    cyan: 'bg-cyan-600'
  }[data.tag.tagColor] || 'bg-gray-600'; // Default color if not found

  return (
    <motion.div drag whileDrag={{scale : 1}} className="relative w-60 h-72 flex-shrink-0 rounded-[45px] bg-zinc-900/10 text-white px-8 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-xm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoMdClose />
            ) : (
              <LuDownload size=".6em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${tagColorClass} flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTittle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
