var listNhanxet = ["Rất không hài lòng", 'Không hài lòng', "Bình thường", "Hài lòng", "Rất hài lòng"]
var listCauHoi = [
    {
        tieude: "A. Khả năng tiếp cận",
        dsCauhoi: ['1. Các biển báo, chỉ dẫn đường đến bệnh viện rõ ràng, dễ nhìn, dễ tìm.',
            '2. Các sơ đồ, biển báo chỉ dẫn đường đến các khoa, phòng trong bệnh viện rõ ràng, dễ hiểu, dễ tìm.',
            '3. Các khối nhà, cầu thang được đánh số rõ ràng, dễ tìm.',
            '4. Các lối đi trong bệnh viện, hành lang bằng phẳng, dễ đi.',
            '5. Có thể tìm hiểu các thông tin và đăng ký khám qua điện thoại, trang tin điện tử của bệnh viện (website) thuận tiện',
        ],
    },
    {
        tieude: "B. Sự minh bạch thông tin và thủ tục khám bệnh, điều trị",
        dsCauhoi: ["1. Quy trình khám bệnh được niêm yết rõ ràng, công khai, dễ hiểu.",
            "2. Các quy trình, thủ tục khám bệnh được cải cách đơn giản, thuận tiện.",
            "3. Giá dịch vụ y tế niêm yết rõ ràng, công khai.",
            "4. Nhân viên y tế tiếp đón, hướng dẫn người bệnh làm các thủ tục niềm nở, tận tình",
            "5. Được xếp hàng theo thứ tự trước sau khi làm các thủ tục đăng ký, nộp tiền, khám bệnh, xét nghiệm, chiếu chụp.",
            "6. Đánh giá thời gian chờ đợi làm thủ tục đăng ký khám.",
            "7. Đánh giá thời gian chờ tới lượt bác sỹ khám.",
            "8. Đánh giá thời gian được bác sỹ khám và tư vấn.",
            "9. Đánh giá thời gian chờ làm xét nghiệm, chiếu chụp.",
            "10. Đánh giá thời gian chờ nhận kết quả xét nghiệm, chiếu chụp.",
        ],
    },
    {
        tieude: "C. Cơ sở vật chất và phương tiện phục vụ người bệnh",
        dsCauhoi: ["1. Có phòng/sảnh chờ khám sạch sẽ, thoáng mát vào mùa hè; kín gió và ấm áp vào mùa đông.",
            "2. Phòng chờ có đủ ghế ngồi cho người bệnh và sử dụng tốt.",
            "3. Phòng chờ có quạt (điều hòa) đầy đủ, hoạt động thường xuyên...",
            "4. Phòng chờ có các phương tiện giúp người bệnh có tâm lý thoải mái như ti-vi, tranh ảnh, tờ rơi, nước uống...",
            "5. Được bảo đảm sự riêng tư khi khám bệnh, chiếu chụp, làm thủ thuật.",
            "6. Nhà vệ sinh thuận tiện, sử dụng tốt, sạch sẽ.",
            "7. Môi trường trong khuôn viên bệnh viện xanh, sạch, đẹp.",
            "8. Khu khám bệnh bảo đảm an ninh, trật tự, phòng ngừa trộm cắp cho người dân."
        ],
    },
    {
        tieude: "D. Thái độ ứng xử, năng lực chuyên môn của nhân viên y tế",
        dsCauhoi: ["1. Nhân viên y tế (bác sỹ, điều dưỡng) có lời nói, thái độ, giao tiếp đúng mực...",
            "2. Nhân viên phục vụ (hộ lý, bảo vệ, kế toán…) có lời nói, thái độ, giao tiếp đúng mực.",
            "3. Được nhân viên y tế tôn trọng, đối xử công bằng, quan tâm, giúp đỡ.",
            "4. Năng lực chuyên môn của bác sỹ, điều dưỡng đáp ứng mong đợi."
        ],
    },
    {
        tieude: "E. Kết quả cung cấp dịch vụ",
        dsCauhoi: ["1. Kết quả khám bệnh đã đáp ứng được nguyện vọng của Ông/Bà.",
            "2. Các hóa đơn, phiếu thu, đơn thuốc và kết quả khám bệnh được cung cấp đầy đủ, rõ ràng, minh bạch và được giải thích nếu có thắc mắc.",
            "3. Đánh giá mức độ tin tưởng về chất lượng dịch vụ y tế.",
            "4. Đánh giá mức độ hài lòng về giá cả dịch vụ y tế.",
        ],
    },
];
const parent = document.getElementById("parent");

for (let z = 0; z < listCauHoi.length; z++) {
    let headingItem = listCauHoi[z];
    let Heading = document.createElement("h2");
    Heading.innerText = headingItem.tieude;
    Heading.style = "color:red";
    parent.append(Heading);


    for (let i = 0; i < headingItem.dsCauhoi.length; i++) {
        let child = document.createElement("div");
        child.className = "child";
        child.id = 'cauhoi_' + i;
        child.style = "font-weight:bold";
        child.innerText = headingItem.dsCauhoi[i];
        let Error = document.createElement("div");
        Error.id = 'Error_' + z + i;
        Error.style = "font-style: italic; color:red";



        for (let j = 0; j < listNhanxet.length; j++) {
            let radio = document.createElement("div");
            radio.style = "font-weight:normal"
            radio.innerHTML = `<input type="radio" id="cauhoi_` + z + i + j + `" name="` + z + i + `" value="` + listNhanxet[j] + `">
 <label for="cauhoi_`+ z + i + j + `">` + listNhanxet[j] + `</label><br>`;

            child.append(radio);

        }



        parent.append(child);
        child.append(Error);

        parent.append(document.createElement("br"));
    }
}






function getDataFromForm() {
    const gender = $('select.custom-select').val();
    const age = $('input#age').val();
    const phoneNumber = $('input#numberphone').val();
    const distance = $('input#distance').val();
    const hasBHYT = $('input[name="optradio"]:checked').val() === "option1";

    const data = {
        gender: gender,
        age: age,
        phoneNumber: phoneNumber,
        distance: distance,
        hasBHYT: hasBHYT
    };
    return data;
}

function getDataDanhGia() {
    const DanhGia = $('input#rate').val();
    const GioiThieu = $('input[name="comeback"]:checked').val();
    const note = $('input#note').val();
    const data = {
        DanhGia: DanhGia + "%",
        GioiThieu: GioiThieu,
        Note: note,
    }

    return data;
}



function getDataCauTraLoi() {
    var obKQ = {};

    let lstHeading = [];
    for (let z = 0; z < listCauHoi.length; z++) {
        let headingItem = listCauHoi[z];

        let lstDsCauhoi = [];

        for (let i = 0; i < headingItem.dsCauhoi.length; i++) {

            const CauTL = $('input[name="' + z + i + '"]:checked').val();
            const data = {
                CauHoi: headingItem.dsCauhoi[i],
                CauTL: CauTL,

            }


            lstDsCauhoi.push(data);

        }
        lstHeading.push(
            {
                tieude: headingItem.tieude,
                dsCauhoi: lstDsCauhoi
            }
        );
    }
    obKQ = {
        thongtinBN: getDataFromForm(),
        khaosat: lstHeading,
        danhgia: getDataDanhGia(),

    }

    console.log(obKQ);


}
function getValidate() {
    for (let z = 0; z < listCauHoi.length; z++) {
        let headingItem = listCauHoi[z];

        for (let i = 0; i < headingItem.dsCauhoi.length; i++) {
            const CauTL = $('input[name="' + z + i + '"]:checked').val();

            if (CauTL === undefined) {

                document.getElementById("Error_" + z + i + "").innerText = "Vui lòng chọn câu trả lời";

            }
        }
    }
}