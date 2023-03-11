import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {addFormatToken} from "ngx-bootstrap/chronos/format/format";

@Component({
    selector: 'app-supplier',
    templateUrl: './supplier.component.html',
    styleUrls: ['./supplier.component.css']
})
export class SupplierComponent {
    registrationForm!: FormGroup;
    basicServices: string[] = [
        'Ra mắt người nhà',
        'Ra mắt bạn bè',
        'Du lịch chung cùng nhóm bạn',
        'Đi chơi chung',
        'Tham dự sinh nhật',
        'Trò chuyện offline',
        'Trò chuyện online',
        'Đi chơi tết',
        'Đi chơi ngày lễ',
    ];
    freeServices: string[] = ['Nắm tay', 'Nói yêu', 'Nhìn mắt'];
    premiumServices: string[] = [
        'Nắm tay',
        'Hôn tay',
        'Ôm',
        'Nhõng nhẽo',
        'Cử chỉ thân mật',
        'Nói lời yêu'
    ]

}
