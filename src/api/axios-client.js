import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "/",
    headers: {
            "Content-Type": 'application/json',
              'Authorization': 'Bearer your_token'

    },
    timeout: 5000
})

axiosClient.interceptors.request.use(
        function(request){
                return request;
        },
        function(error){   
                 return Promise.reject(error);
        }
)
axiosClient.interceptors.response.use(function(response){
        return response.data;   // trả về dữ liệu 
}, function(error){
            if(error.response){
                const status = error.response.status;
                         if (status === 400) {
               alert("400: Yêu cầu của Client không hợp lệ.");
  } else if (status === 401) {
    alert("401: Thiếu thông tin xác thực hoặc token không hợp lệ.");
  } else if (status === 403) {
    alert("403: Bạn không có quyền truy cập tài nguyên này.");
  } else if (status === 404) {
    alert("404: Không tìm thấy tài nguyên được yêu cầu.");
    return Promise.reject(error); // có thể tiếp tục xử lý phía gọi nếu cần
  } else if (status === 408) {
    alert("408: Yêu cầu quá thời gian phản hồi (Request Timeout).");
  } else if (status === 429) {
    alert("429: Quá nhiều yêu cầu. Vui lòng thử lại sau.");
  } else if (status === 500) {
    alert("500: Lỗi máy chủ nội bộ. Vui lòng thử lại sau.");
  } else if (status === 502) {
    alert("502: Bad Gateway - Máy chủ trung gian nhận phản hồi lỗi từ upstream server.");
  } else if (status === 503) {
    alert("503: Máy chủ đang bảo trì hoặc quá tải.");
  } else if (status === 504) {
    alert("504: Gateway Timeout - Máy chủ không phản hồi kịp.");
  } else {
    alert(`Lỗi không xác định: ${status}`);
  }
} else if (error.request) {
  alert("Không nhận được phản hồi từ máy chủ. Vui lòng kiểm tra kết nối.");
} else {
  alert(`Lỗi xảy ra: ${error.message}`);
}
            return Promise.reject(error);  
})

export default axiosClient;
;
