/**
 * ?BaiTap1
 * Khối 1: input
 *    Lương 1 ngày, số ngày làm
 * 
 * Khối 2:
 *
 *    B1: lấy giá trị từ form khi user click
 *      + tạo hàm tính lương nhân viên
 *      + gán hàm vào sự kiện click của button    
 *    B2: trong hàm 
 *      + lấy giá trị từ form
 *      + lập công thức tính lương nhân viên
 *          lương 1 ngày * số ngày làm
 *      + hiển thị kết quả lên UI
 * 
 * Khối 3:output
 *  lương nhân viên
 */

function tinhLuongNhanVien(){

    var luong1Ngay = document.getElementById("Luong1Ngay").value;
    var soNgayLam = document.getElementById("SoNgayLam").value;
     
    var luongNhanVien = Number(luong1Ngay) * Number(soNgayLam) 
   
    document.getElementById("txtLuongNhanVien").innerHTML = luongNhanVien ;

}


document.getElementById("btnLuong").onclick = tinhLuongNhanVien;
 
/**
 * ?BaiTap2
 * Khối 1: input
 *  nhập số 1, số 2, số 3, số 4, số 5
 * 
 * Khối 2:
 *
 *    B1: lấy giá trị từ form khi user click
 *      + tạo hàm tính giá trị trung bình
 *      + gán hàm vào sự kiện click của button    
 *    B2: trong hàm 
 *      + lấy giá trị từ form
 *      + lập công thức tính giá trị trung bình
 *          ( số 1 + số 2 + số 3 + số 4 + số 5)/5
 *      + hiển thị kết quả lên UI
 * 
 * Khối 3:output
 *   tính giá trị trung bình
 */


function giatriTB(){
    console.log("hàm tính dtb")
    var so1 = document.getElementById("so1").value;
    var so2 = document.getElementById("so2").value;
    var so3 = document.getElementById("so3").value;
    var so4 = document.getElementById("so4").value;
    var so5 = document.getElementById("so5").value;

    var soTB= ( Number(so1) + Number(so2)+ Number(so3)+ Number(so4)+ Number(so5)) /5
 
    // var soTB= ( parseFloat(so1) + parseFLoat(so2)+ parseFloat(so3)+parseFLoat(so4)+parseFloat(so5)) /5;
    
    console.log( soTB);
    
    document.getElementById("txtTinhTB").innerHTML = soTB;

}
document.getElementById("btnTinhTB").onclick = giatriTB;

/**
 * ?BaiTap3
 * Khối 1: input
 *  nhập tiền USD
 * 
 * Khối 2:
 *
 *    B1: lấy giá trị từ form khi user click
 *      + tạo hàm tính quy đổi tiền
 *      + gán hàm vào sự kiện click của button    
 *    B2: trong hàm 
 *      + lấy giá trị từ form
 *      + lập công thức tính quy đổi tiền:
 *           giá 1USD mặc định là 23500
 *           quyDoiTien = 23500 * tiền USD
 *      + hiển thị kết quả lên UI
 * 
 * Khối 3:output
 *   tính quy đổi từ USD ra tiền Việt
 */
function quyDoiTien(){

    var tienViet = 23500
    var tienUSD = document.getElementById("tienUSD").value;
   

    var tinhTienViet= tienViet * tienUSD
    var hienthiTienViet = new Intl.NumberFormat('vn-VN').format(tinhTienViet)

    document.getElementById("txtQuyDoi").innerHTML = hienthiTienViet;
   
}

/**
 * ?BaiTap4
 * Khối 1: input
 *  nhập chiều dài, chiều rộng hình chữ nhật
 * 
 * Khối 2:
 *
 *    B1: lấy giá trị từ form khi user click
 *      + tạo hàm tính diện tích, hàm tính chu vi
 *      + gán hàm vào sự kiện click của button    
 *    B2: trong hàm 
 *      + lấy giá trị từ form
 *      + lập công thức tính diện tích hình chữ nhật:
 *              tinhDienTich = chiều dài * chiều rộng
 *      + lập công thức tính chu vi hình chữ nhật:
 *              tinhChuVi = (chiều dài + chiều rộng)*2    
 *      + hiển thị kết quả lên UI
 * 
 * Khối 3:output
 *   tính diện tích, chu vi hình chữ nhật
 */
function tinhChuViDienTich(){

    var chieuDai =  document.getElementById("ChieuDai").value;
    var chieuRong = document.getElementById("ChieuRong").value;
   

    var ketquaChuVi=( Number(chieuDai) + Number(chieuRong))*2
    var ketquaDienTich = chieuDai * chieuRong

    document.getElementById("txtTinhKetQua").innerHTML = "Chu vi:" + ketquaChuVi + ";" + "Diện tích :" + ketquaDienTich;
    
}

 document.getElementById("btnTinhKetQua").onclick = tinhChuViDienTich;
/**
 * ?BaiTap5
 * Khối 1: input
 *  num (nguyên dương có 2 chữ số )
 * 
 * Khối 2:
 * 
 *       B1: khai báo biến x và gán giá trị ban đầu
 * 
 *       B2: Lập công thức
 *  
 *          2.2: lấy số hàng chục
 *               hangChuc = Math.floor(x(num)/10) 
 *          2.3: hàng đơn vị
 *               hangDonVi = x % 10 
 * 
 *       B3: tính tổng và thông báo kết quả
 *
 * Khối 3:output
 *    total (tổng các chữ số của số num ) = hangChuc + hangDonVi
 *   
 */

//B1:

//B2:
//Math.floor: lấy phần nguyên trong bài toán chia

function tinh2KySo () {
    var num = document.getElementById("NhapSo").value;
  
var hangChuc =  Math.floor(num / 10);
var hangDonVi = num % 10; 

var total = hangChuc + hangDonVi;
document.getElementById("txtTinhTong").innerHTML = total;

}
