import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./bootstrap.css";
import "./font-awesome.css";
import { Button, SVGIcon } from "react-md";

export default class reacttes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "",
      jumlah: "",
      harga: "",
      totalharga: "",
      jumlahbarang: "",
      data: [],
      iniEdit: false,
      editNo: null
    };
    this.tambah = this.tambah.bind(this);
    this.refresh = this.refresh.bind(this);
  }
  handleEdit(produk, nomor) {
    var data = this.state.data;
    this.setState({
      nama: produk.nama,
      jumlah: produk.jumlah,
      harga: produk.harga,
      iniEdit: true,
      editNo: nomor
    });
  }
  handleDelete(nomor) {
    var data = this.state.data;
    data.splice(nomor);
    this.setState({
      data: data
    });
  }
  tambah(e) {
    var editbukan = this.state.iniEdit;
    if (editbukan) {
      var data = this.state.data;
      var nama = this.state.nama;
      var jumlah = this.state.jumlah;
      var harga = this.state.harga;

      var produk = data[this.state.editNo];
      produk.nama = nama;
      produk.jumlah = jumlah;
      produk.harga = harga;
      this.setState({
        data: data
      });
    } else {
      var data = this.state.data;
      var nama = this.state.nama;
      var jumlah = this.state.jumlah;
      var harga = this.state.harga;

      var produk = {};
      produk.nama = nama;
      produk.jumlah = jumlah;
      produk.harga = harga;
      data.push(produk);

      this.setState({
        nama: e.target.value,
        jumlah: e.target.value,
        harga: e.target.value
      });

      console.log(data);
    }
  }
  refresh(e) {
    this.setState({
      nama: "",
      jumlah: "",
      harga: ""
    });
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }

  render() {
    return (
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Titillium+Web"
          ></link>
          <link
            rel="stylesheet"
            href="https://unpkg.com/react-md@1.12.3/dist/react-md.indigo-pink.min.css"
          ></link>
        </head>
        <body>
          <div class="header">
            <br />
            <center>
              <h1>LIST PRODUK</h1>
            </center>
            <br />
          </div>
          <div class="inputan">
            <br />
            <center>
              <input
                ref="myInput"
                class="text-dark nama"
                type="text"
                id="nama"
                value={this.state.nama}
                onChange={e => {
                  var value = e.target.value;
                  this.setState({
                    nama: value
                  });
                }}
                placeholder="Nama Produk . . ."
              ></input>
              <br />
              <input
                ref="myInput"
                class="text-dark jumlah"
                type="number"
                id="jumlah"
                value={this.state.jumlah}
                onChange={e => {
                  var value = e.target.value;
                  this.setState({
                    jumlah: value
                  });
                }}
                placeholder="Jumlah . . ."
              ></input>
              <br />
              <input
                ref="myInput"
                class="text-dark harga"
                type="text"
                id="totalharga"
                value={this.state.harga}
                onChange={e => {
                  var value = e.target.value;
                  this.setState({
                    harga: value
                  });
                }}
                placeholder="Harga . . ."
              ></input>
              <br />
              <br />
            </center>
          </div>
          <div class="button-submit">
            <center>
              <br />
              <Button raised onClick={this.refresh}>
                ↺
              </Button>
              <Button raised onClick={this.tambah.bind(this)}>
                SUBMIT
              </Button>
            </center>
            <br />
          </div>
          <br />
          <br />
          <div>
            <center>
              <table>
                <tr class="text-white">
                  <th>
                    <center>NAMA PRODUK</center>
                  </th>
                  <th>
                    <center>JUMLAH</center>
                  </th>
                  <th>
                    <center>HARGA</center>
                  </th>
                  <th>
                    <center>EDIT</center>
                  </th>
                  <th>
                    <center>DELETE</center>
                  </th>
                </tr>
                {this.state.data.map((produk, nomor) => {
                  return (
                    <tr>
                      <td>{produk.nama}</td>
                      <td>{produk.jumlah}</td>
                      <td>Rp. {produk.harga}</td>
                      <td>
                        <center>
                          <Button
                            raised
                            onClick={this.handleEdit.bind(this, produk, nomor)}
                          >
                            ✎
                          </Button>
                        </center>
                      </td>
                      <td>
                        <center>
                          <Button
                            raised
                            onClick={this.handleDelete.bind(this, nomor)}
                          >
                            ✂
                          </Button>
                        </center>
                      </td>
                    </tr>
                  );
                })}
              </table>
              <table>
                <tr>
                  <th>Jumlah Barang</th>
                  <th>Total Harga</th>
                </tr>
                {this.state.data.map(produk => {
                  return (
                    <tr>
                      <td>test</td>
                      <td>Rp. {produk.harga}</td>
                    </tr>
                  );
                })}
              </table>
            </center>
          </div>

          <script src="https://unpkg.com/react/dist/react.min.js"></script>
          <script src="https://unpkg.com/react-dom/dist/react-dom.min.js"></script>
          <script src="https://unpkg.com/react-addons-css-transition-group/dist/react-addons-css-transition-group.min.js"></script>
          <script src="https://unpkg.com/react-addons-transition-group/dist/react-addons-transition-group.min.js"></script>
          <script src="https://unpkg.com/react-md@1.12.3/dist/react-md.min.js"></script>
          <script src="/bundle.js"></script>
        </body>
      </html>
    );
  }
}
