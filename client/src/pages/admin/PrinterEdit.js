import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import getOptions from "../../helpers/option";
import Button from "../../components/Button";
import "./../../styles/printer-add.css";

export default function PrinterEdit() {
    // test data 
    const campuses = [
        { name: 'CS1 - Cơ sở Lý Thường Kiệt', value: 1 },
        { name: 'CS2 - Cơ sở Dĩ An', value: 2 },
    ];
    const buildings = [
        { name: 'H3', value: 'H3' },
        { name: 'H6', value: 'H6' },
    ];
    const rooms = [
        { name: '114', value: '114' },
        { name: '504', value: '504' }
    ];

    const pageLocation = useLocation();
    const printer = pageLocation.state.printer;

    const [id, setId] = useState(printer.id);
    const [brand, setBrand] = useState(printer.brand);
    const [model, setModel] = useState(printer.model);
    const [location, setLocation] = useState({
        campus: printer.campus,
        building: printer.building,
        room: printer.room
    });
    const [description, setDescription] = useState(printer.description);

    function handleSubmit() {
        // TODO
        // if success call: editPrinter()
    }

    return (
        <main className="printer-add">
            <h1>Chỉnh sửa máy in</h1>
            <form>
                <div className="field">
                    <label htmlFor="id">Mã số (ID)</label>
                    <input type="text" name="id" id="id" 
                        value={id}
                        onChange={(e) => {
                            setId(e.target.value);
                        }}
                    />
                    <small className="error"></small>
                </div>
                <div className="field">
                    <label htmlFor="brand">Hãng sản xuất</label>
                    <input type="text" name="brand" id="brand" 
                        value={brand}
                        onChange={(e) => {
                            setBrand(e.target.value);
                        }}/>
                </div>
                <div className="field">
                    <label htmlFor="model">Mẫu mã</label>
                    <input type="text" name="model" id="model" 
                        value={model}
                        onChange={(e) => {
                            setModel(e.target.value);
                        }}/>
                </div>
                <fieldset className="location">
                    <legend>Vị trí</legend>
                    <div className="field">
                        <label htmlFor="campus">Cơ sở</label>
                        <select name="campus" id="campus"
                            value={location.campus}
                            onChange={(e) => {
                                setLocation({...location, campus: e.target.value});
                            }}>
                            {getOptions(campuses)}
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="building">Tòa</label>
                        <select name="building" id="building"
                            value={location.building}
                            onChange={(e) => {
                                setLocation({...location, building: e.target.value});
                            }}>
                            {getOptions(buildings)}
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="room">Phòng</label>
                        <select name="room" id="room"
                            value={location.room} 
                            onChange={(e) => {
                                setLocation({...location, room: e.target.value});
                            }}>
                            {getOptions(rooms)}
                        </select>
                    </div>
                </fieldset>
                <div className="field">
                    <label htmlFor="desc">Mô tả</label>
                    <textarea name="description" id="desc"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}>
                    </textarea>
                </div>
                
                <div className="foot">
                    <Button
                        action={handleSubmit}
                    >
                        Xác nhận
                    </Button>
                    <Button className="delete" link={"/admin/printer/"}>
                        Hủy bỏ
                    </Button>
                </div>
            </form>
        </main>
    )
}