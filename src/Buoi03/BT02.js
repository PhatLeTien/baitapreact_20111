import React from "react";
class BT02 extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 align ="center"></h1>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#truyen1" aria-expanded="true" aria-controls="collapse">
                            Con ngựa có 5 chân
                            </button>
                            </h2>
                            <div id="truyen1" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    - Thấy cậu con trai trở về với chiếc nơ xanh trên cổ tay, Tũn hỏi:<br/>
                                    - Nơ xanh ở đâu vậy con?<br/>
                                    - Hôm nay con trả lời đúng câu hỏi của cô giáo nên được thưởng ạ!<br/>
                                    - cậu con trai tự hào đáp.<br/>
                                    - Con giỏi quá!  Tũn khích lệ  Thế cô giáo hỏi gì nào?<br/>
                                    - Con trai Tũn đáp:<br/>
                                    - Cô hỏi con ngựa có mấy chân? Con trả lời là 5.<br/>
                                    - Ngựa chỉ có 4 chân thôi mà?  Tũn tròn mắt.<br/>
                                    - Cậu con trai nhún vai:<br/>
                                    - Nhưng con là người đưa ra đáp án gần đúng nhất!<br/>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#truyen2" aria-expanded="true" aria-controls="collapse">
                            Con ngựa có 5 chân
                            </button>
                            </h2>
                            <div id="truyen2" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    - Thấy cậu con trai trở về với chiếc nơ xanh trên cổ tay, Tũn hỏi:<br/>
                                    - Nơ xanh ở đâu vậy con?<br/>
                                    - Hôm nay con trả lời đúng câu hỏi của cô giáo nên được thưởng ạ!<br/>
                                    - cậu con trai tự hào đáp.<br/>
                                    - Con giỏi quá!  Tũn khích lệ  Thế cô giáo hỏi gì nào?<br/>
                                    - Con trai Tũn đáp:<br/>
                                    - Cô hỏi con ngựa có mấy chân? Con trả lời là 5.<br/>
                                    - Ngựa chỉ có 4 chân thôi mà?  Tũn tròn mắt.<br/>
                                    - Cậu con trai nhún vai:<br/>
                                    - Nhưng con là người đưa ra đáp án gần đúng nhất!<br/>
                                </div>
                            </div>
                        </div>
                    </div>  
            </div>  
        );
    }


};
export default BT02;