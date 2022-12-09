
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
        image: require('../assets/keri/keri_image_3.png'),
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
        image: require('../assets/keri/keri_image_6.png'),
        caption: "Love my cultural food!",
      },
    };

    export const MAURICEPOSTS1 = {
      1: {
        id: 1,
        title: 'Maurice',
        image: require('../assets/maurice/1.png'),
        caption: "Tasty home cooked meal!",
      },
      2: {
          id: 2,
          title: 'Maurice',
          image: require('../assets/maurice/2.png'),
          caption: "My siblings encourage me!",
        },
      3: {
          id: 3,
          title: 'Maurice',
          image: require('../assets/maurice/3.png'),
          caption: "Checkups are important!",
        },
      4: {
          id: 4,
          title: 'Maurice',
          image: require('../assets/maurice/4.png'),
          caption: "Just started running!",
        },
      5: {
          id: 5,
          title: 'Maurice',
          image: require('../assets/maurice/5.png'),
          caption: "School makes me feel happy",
        },
      6: {
          id: 6,
          title: 'Maurice',
          image: require('../assets/maurice/6.png'),
          caption: "Some great reads",
        },
      };

    export const KERIPOSTS = [...Object.values(KERIPOSTS1)].map(item => ({
        ...item,
        id: Math.random().toString(),
      }));
      export const MAURICEPOSTS = [...Object.values(MAURICEPOSTS1)].map(item => ({
        ...item,
        id: Math.random().toString(),
      }));
