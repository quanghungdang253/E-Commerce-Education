
import React from 'react';
import TopLoadingBar from '../../../ui/loading';

 function ProductDetailModal({isOpen,onClose,course,loading}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
                    <div className="bg-gradient-to-br from-white via-slate-100 to-slate-200 rounded-xl shadow-2xl overflow-hidden max-w-3xl w-full relative animate-fade-in transform scale-95 max-h-[100vh] overflow-y-auto">
        
        <button
                  onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl font-bold transition duration-300 z-10"
        >
          x
        </button>

  
        <TopLoadingBar isLoading={loading} />

        {!loading && (
          <div className="flex flex-col">
            {/* Ảnh ở trên */}
            <div className="w-full bg-white flex items-center justify-center p-4">
              <img
                src={course.image}
                alt={course.name}
                className="rounded-xl w-full h-auto max-h-[350px] object-cover shadow-md"
              />
            </div>

            {/* Nội dung chia 2 cột */}
            <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Cột trái - Thông tin khóa học */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-indigo-700">{course.name}</h2>
                <p className="text-gray-700">{course.fullDesc}</p>

                <div className="space-y-1">
                  <p>
                             <span className="font-semibold">Giảng viên:</span> 
                             
                             {course.instructor}
                  </p>

                  <p>
                    <span className="font-semibold">
                    Thời lượng:</span>
                     {course.duration}

                  </p>
                  <p>
                    <span className="font-semibold"  >Đánh giá:  </span> {course.rating} / 5
                  </p>
                </div>
              </div>

              {/* Cột phải - Nội dung khóa học */}
              <div className="relative">
                <h3 className="text-lg 
                                font-semibold mb-2
                              text-indigo-600"> Nội dung khóa học:</h3>
               <ul className="list-disc list-inside text-gray-800 space-y-1">
               
                {course?.syllabus?.map((item, index) => (
                 <li key={index}>{item}</li>
              ))}
</ul>

                <p className="text-xl font-bold text-red-600 mt-2 absolute right-0 bottom-0">
                  Giá: {course.price.toLocaleString()}vnđ
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


export default ProductDetailModal;