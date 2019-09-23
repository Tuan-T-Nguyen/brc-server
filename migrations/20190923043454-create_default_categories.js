module.exports = {
  up(db) {
    db.collection('categories').createIndex(
      {
        englishName: 1,
        type: 1,
      },
      { unique: true },
    );
    return db.collection('categories').insertMany([
      {
        englishName: 'Action and adventure',
        vietnamName: 'Hành động và phiêu lưu',
        type: 'fiction',
      },
      {
        englishName: 'Alternate history',
        vietnamName: 'Lịch sử xoay chiều',
        type: 'fiction',
      },
      {
        englishName: 'Anthology',
        vietnamName: 'Nhân chủng học',
        type: 'fiction',
      },
      {
        englishName: 'Chick lit',
        vietnamName: 'Gà sáng',
        type: 'fiction',
      },
      {
        englishName: "Children's",
        vietnamName: 'Trẻ em',
        type: 'fiction',
      },
      {
        englishName: 'Comic book',
        vietnamName: 'Truyện tranh',
        type: 'fiction',
      },
      {
        englishName: 'Coming-of-age',
        vietnamName: 'Tới tuổi',
        type: 'fiction',
      },
      {
        englishName: 'Crime',
        vietnamName: 'Tội ác',
        type: 'fiction',
      },
      {
        englishName: 'Drama',
        vietnamName: 'Kịch',
        type: 'fiction',
      },
      {
        englishName: 'Fairytale',
        vietnamName: 'Truyện cổ tích',
        type: 'fiction',
      },
      {
        englishName: 'Fantasy',
        vietnamName: 'Phóng túng',
        type: 'fiction',
      },
      {
        englishName: 'Graphic novel',
        vietnamName: 'Tiểu thuyết đồ họa',
        type: 'fiction',
      },
      {
        englishName: 'Historical fiction',
        vietnamName: 'Tiểu thuyết lịch sử',
        type: 'fiction',
      },
      {
        englishName: 'Horror',
        vietnamName: 'Kinh dị',
        type: 'fiction',
      },
      {
        englishName: 'Mystery',
        vietnamName: 'Huyền bí',
        type: 'fiction',
      },
      {
        englishName: 'Paranormal romance',
        vietnamName: 'Lãng mạn huyền bí',
        type: 'fiction',
      },
      {
        englishName: 'Picture book',
        vietnamName: 'Sách ảnh',
        type: 'fiction',
      },
      {
        englishName: 'Poetry',
        vietnamName: 'Thơ',
        type: 'fiction',
      },
      {
        englishName: 'Political thriller',
        vietnamName: 'Phim kinh dị chính trị',
        type: 'fiction',
      },
      {
        englishName: 'Romance',
        vietnamName: 'Lãng mạn',
        type: 'fiction',
      },
      {
        englishName: 'Satire',
        vietnamName: 'Châm biếm',
        type: 'fiction',
      },
      {
        englishName: 'Science fiction',
        vietnamName: 'Khoa học viễn tưởng',
        type: 'fiction',
      },
      {
        englishName: 'Short story',
        vietnamName: 'Truyện ngắn',
        type: 'fiction',
      },
      {
        englishName: 'Suspense',
        vietnamName: 'Hồi hộp',
        type: 'fiction',
      },
      {
        englishName: 'Thriller',
        vietnamName: 'Kinh dị',
        type: 'fiction',
      },
      {
        englishName: 'Young adult',
        vietnamName: 'Thanh niên',
        type: 'fiction',
      },
    ]);
  },

  down(db) {},
};
