module.exports = {
  up(db) {
    return db.collection('categories').insertMany([
      {
        englishName: 'Art',
        vietnamName: 'Nghệ thuật',
        type: 'non-fiction',
      },
      {
        englishName: 'Autobiography',
        vietnamName: 'Tự truyện',
        type: 'non-fiction',
      },
      {
        englishName: 'Biography',
        vietnamName: 'Tiểu sử',
        type: 'non-fiction',
      },
      {
        englishName: 'Book review',
        vietnamName: 'Đánh giá sách',
        type: 'non-fiction',
      },
      {
        englishName: 'Cookbook',
        vietnamName: 'Sách dạy nấu ăn',
        type: 'non-fiction',
      },
      {
        englishName: 'Diary',
        vietnamName: 'Nhật ký',
        type: 'non-fiction',
      },
      {
        englishName: 'Dictionary',
        vietnamName: 'Từ điển',
        type: 'non-fiction',
      },
      {
        englishName: 'Encyclopedia',
        vietnamName: 'Bách khoa toàn thư',
        type: 'non-fiction',
      },
      {
        englishName: 'Guide',
        vietnamName: 'Sách hướng dẫn',
        type: 'non-fiction',
      },
      {
        englishName: 'Health',
        vietnamName: 'Sách sức khoẻ',
        type: 'non-fiction',
      },
      {
        englishName: 'History',
        vietnamName: 'Sách lịch sử',
        type: 'non-fiction',
      },
      {
        englishName: 'Journal',
        vietnamName: 'Tạp chí',
        type: 'non-fiction',
      },
      {
        englishName: 'Math',
        vietnamName: 'Toán',
        type: 'non-fiction',
      },
      {
        englishName: 'Memoir',
        vietnamName: 'Hồi ký',
        type: 'non-fiction',
      },
      {
        englishName: 'Prayer',
        vietnamName: 'Cầu nguyện',
        type: 'non-fiction',
      },
      {
        englishName: 'Religion, spirituality, and new age',
        vietnamName: 'Tôn giáo, tâm linh và thời đại mới',
        type: 'non-fiction',
      },
      {
        englishName: 'Textbook',
        vietnamName: 'Sách giáo khoa',
        type: 'non-fiction',
      },
      {
        englishName: 'Review',
        vietnamName: 'Ôn tập',
        type: 'non-fiction',
      },
      {
        englishName: 'Science',
        vietnamName: 'Khoa học',
        type: 'non-fiction',
      },
      {
        englishName: 'Self help',
        vietnamName: 'Tự lực',
        type: 'non-fiction',
      },
      {
        englishName: 'Travel',
        vietnamName: 'Du lịch',
        type: 'non-fiction',
      },
      {
        englishName: 'True crime',
        vietnamName: 'Tội ác thực sự',
        type: 'non-fiction',
      },
    ]);
  },

  down(db) {},
};
