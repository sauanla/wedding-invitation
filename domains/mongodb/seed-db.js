
const SeedDB = {
  user: {
    email: "admin@invitation.com",
    username: "admin",
    password: "$2b$10$VhmfGtzS9/IZPQuLQhmXkeTZmXrHYjIV2HCRfsOEp66Yk/OJiwow2", //123qwe
    password_confirm: "$2b$10$VhmfGtzS9/IZPQuLQhmXkeTZmXrHYjIV2HCRfsOEp66Yk/OJiwow2",
    role: "admin"
  },
  dataConfig: {
    male: {
      name: "Nguyễn Văn An",
      parent: {
        father: "Họ Tên Bố",
        mother: "Họ Tên Mẹ"
      },
      location: {
        text: "Quảng Yên - Quảng Ninh - Việt Nam",
        map: "https://goo.gl/maps/tTZz4qKhaiqSL8Q66"
      },
      time_start: {
        date: {
          lunar: {
            day: "17",
            month: "12",
            year: "2020"
          },
          day_of_week: "5",
          solar: {
            day: "17",
            month: "12",
            year: "2020"
          }
        },
        time: {
          hour: "10",
          minute: "00"
        }
      },
      finances: [{
        provider_name: "MB Bank",
        provider_number: "9971997555555",
        holder_name: "NGUYEN VAN AN"
      }, {
        provider_name: "Techcombank",
        provider_number: "19034892842011",
        holder_name: "NGUYEN VAN AN"
      }, {
        provider_name: "Momo",
        provider_number: "0973699999",
        holder_name: "NGUYEN VAN AN"
      }, {
        provider_name: "Airpay",
        provider_number: "0973699999",
        holder_name: "NGUYEN VAN AN"
      }],
      email: "male@gmail.com",
      phone: "0973699999",
      bg: '/assets/images/bg.jpg',
      bg_fb: '/assets/images/bg-fb.jpg'
    },
    female: {
      name: "Nguyễn Thị Lan Anh",
      parent: {
        father: "Họ Tên Bố",
        mother: "Họ Tên Mẹ"
      },
      location: {
        text: "Quốc Oai - Hà Nội - Việt Nam",
        map: "https://goo.gl/maps/tRjKuVRNisqxhQaT7"
      },
      time_start: {
        date: {
          lunar: {
            day: "17",
            month: "12",
            year: "2020"
          },
          day_of_week: "5",
          solar: {
            day: "17",
            month: "12",
            year: "2020"
          }
        },
        time: {
          hour: "10",
          minute: "00"
        }
      },
      finances: [{
        provider_name: "Techcombank",
        provider_number: "19033799999999",
        holder_name: "NGUYEN THI LAN ANH"
      }, {
        provider_name: "Techcombank",
        provider_number: "19033799999999",
        holder_name: "NGUYEN THI LAN ANH"
      }, {
        provider_name: "Momo",
        provider_number: "09736",
        holder_name: "NGUYEN THI LAN ANH"
      }, {
        provider_name: "Airpay",
        provider_number: "0973699999",
        holder_name: "NGUYEN VAN AN"
      }],
      email: "female@gmail.com",
      phone: "0985123123",
      bg: '/assets/images/bg.jpg',
      bg_fb: '/assets/images/bg-fb.jpg'
    },
    default: true
  }
};

module.exports = SeedDB;
