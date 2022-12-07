
export const KERIPOSTS1 = {
    1: {
      id: 1,
      title: 'Keri',
      image: require('../assets/keri/keri_image_1.jpeg'),
      caption: "New Glucose Monitor!",
    },
    2: {
        id: 2,
        title: 'Keri',
        image: require('../assets/keri/keri_image_2.jpeg'),
        caption: "Yum!",
      },
    3: {
        id: 3,
        title: 'Keri',
        image: require('../assets/keri/keri_image_3.jpeg'),
        caption: "Exercised today and I felt better!",
      },
    4: {
        id: 4,
        title: 'Keri',
        image: require('../assets/keri/keri_image_4.jpeg'),
        caption: "Had a doctor' appt today!",
      },
    5: {
        id: 5,
        title: 'Keri',
        image: require('../assets/keri/keri_image_5.jpeg'),
        caption: "Went on a walk today!",
      },
    6: {
        id: 6,
        title: 'Keri',
        image: require('../assets/keri/keri_image_6.jpeg'),
        caption: "Hung out with friends!",
      },
    };

    export const KERIPOSTS = [...Object.values(KERIPOSTS1)].map(item => ({
        ...item,
        id: Math.random().toString(),
      }));