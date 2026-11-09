export class Akun {
  nama: string;
  email: string;
 
  constructor(nama: string, email: string) {
    this.nama = nama;
    this.email = email;
  }
 
  peran(): string { return "Akun"; }
  hakAkses(): string[] { return ["Beranda"]; }
 
  info(): string {
    return `${this.nama} (${this.peran()}) → ${this.hakAkses().join(", ")}`;
  }
}
export class Akun {
  nama: string;
  email: string;
 
  constructor(nama: string, email: string) {
    this.nama = nama;
    this.email = email;
  }
 
  peran(): string { return "Akun"; }
  hakAkses(): string[] { return ["Beranda"]; }
 
  info(): string {
    return `${this.nama} (${this.peran()}) → ${this.hakAkses().join(", ")}`;
  }
}