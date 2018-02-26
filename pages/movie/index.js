// pages/movie/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList: [],
    finderList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let mockData = [];
    mockData.push({ "count": 8, "start": 0, "subject_collection_items": [{ "original_price": null, "rating": { "count": 219366, "max": 10, "value": 8.5 }, "actions": [], "year": "2018", "card_subtitle": "2018 \/ \u4e2d\u56fd\u5927\u9646 \u9999\u6e2f \/ \u5267\u60c5 \u52a8\u4f5c \/ \u6797\u8d85\u8d24 \/ \u5f20\u8bd1 \u9ec4\u666f\u745c", "id": "26861685", "title": "\u7ea2\u6d77\u884c\u52a8", "label": null, "actors": ["\u5f20\u8bd1", "\u9ec4\u666f\u745c", "\u6d77\u6e05"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": false, "price": null, "date": null, "info": "\u4e2d\u56fd\u5927\u9646 \u9999\u6e2f \/ \u5267\u60c5 \u52a8\u4f5c \/ \u6797\u8d85\u8d24 \/ \u5f20\u8bd1 \u9ec4\u666f\u745c", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/26861685\/", "release_date": "02.16", "cover": { "url": "https://img3.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2514175916.jpg", "width": 857, "shape": "rectangle", "height": 1200 }, "uri": "douban:\/\/douban.com\/movie\/26861685", "subtype": "", "directors": ["\u6797\u8d85\u8d24"], "reviewer_name": "", "null_rating_reason": "" }, { "original_price": null, "rating": { "count": 222089, "max": 10, "value": 7.1 }, "actions": [], "year": "2018", "card_subtitle": "2018 \/ \u4e2d\u56fd\u5927\u9646 \/ \u559c\u5267 \u52a8\u4f5c \u60ac\u7591 \/ \u9648\u601d\u8bda \/ \u738b\u5b9d\u5f3a \u5218\u660a\u7136", "id": "26698897", "title": "\u5510\u4eba\u8857\u63a2\u68482", "label": null, "actors": ["\u738b\u5b9d\u5f3a", "\u5218\u660a\u7136", "\u8096\u592e"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": false, "price": null, "date": null, "info": "\u4e2d\u56fd\u5927\u9646 \/ \u559c\u5267 \u52a8\u4f5c \u60ac\u7591 \/ \u9648\u601d\u8bda \/ \u738b\u5b9d\u5f3a \u5218\u660a\u7136", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/26698897\/", "release_date": "02.16", "cover": { "url": "https://img3.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2511355624.jpg", "width": 1000, "shape": "rectangle", "height": 1400 }, "uri": "douban:\/\/douban.com\/movie\/26698897", "subtype": "", "directors": ["\u9648\u601d\u8bda"], "reviewer_name": "", "null_rating_reason": "" }, { "original_price": null, "rating": { "count": 84265, "max": 10, "value": 5.2 }, "actions": [], "year": "2018", "card_subtitle": "2018 \/ \u4e2d\u56fd\u5927\u9646 \u9999\u6e2f \/ \u559c\u5267 \u5947\u5e7b \/ \u8bb8\u8bda\u6bc5 \/ \u6881\u671d\u4f1f \u767d\u767e\u4f55", "id": "26575103", "title": "\u6349\u5996\u8bb02", "label": null, "actors": ["\u6881\u671d\u4f1f", "\u767d\u767e\u4f55", "\u4e95\u67cf\u7136"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": false, "price": null, "date": null, "info": "\u4e2d\u56fd\u5927\u9646 \u9999\u6e2f \/ \u559c\u5267 \u5947\u5e7b \/ \u8bb8\u8bda\u6bc5 \/ \u6881\u671d\u4f1f \u767d\u767e\u4f55", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/26575103\/", "release_date": "02.16", "cover": { "url": "https://img3.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2509643816.jpg", "width": 1427, "shape": "rectangle", "height": 2000 }, "uri": "douban:\/\/douban.com\/movie\/26575103", "subtype": "", "directors": ["\u8bb8\u8bda\u6bc5"], "reviewer_name": "", "null_rating_reason": "" }, { "original_price": null, "rating": { "count": 14050, "max": 10, "value": 4.8 }, "actions": [], "year": "2018", "card_subtitle": "2018 \/ \u4e2d\u56fd\u5927\u9646 \/ \u559c\u5267 \u5947\u5e7b \/ \u90ed\u5fb7\u7eb2 \/ \u5cb3\u4e91\u9e4f \u5434\u4eac", "id": "27114417", "title": "\u7956\u5b97\u5341\u4e5d\u4ee3", "label": null, "actors": ["\u5cb3\u4e91\u9e4f", "\u5434\u4eac", "\u5434\u79c0\u6ce2"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": false, "price": null, "date": null, "info": "\u4e2d\u56fd\u5927\u9646 \/ \u559c\u5267 \u5947\u5e7b \/ \u90ed\u5fb7\u7eb2 \/ \u5cb3\u4e91\u9e4f \u5434\u4eac", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/27114417\/", "release_date": "02.16", "cover": { "url": "https://img3.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2511560763.jpg", "width": 1071, "shape": "rectangle", "height": 1500 }, "uri": "douban:\/\/douban.com\/movie\/27114417", "subtype": "", "directors": ["\u90ed\u5fb7\u7eb2"], "reviewer_name": "", "null_rating_reason": "" }, { "original_price": null, "rating": { "count": 4376, "max": 10, "value": 6.8 }, "actions": [], "year": "2018", "card_subtitle": "2018 \/ \u4e2d\u56fd\u5927\u9646 \/ \u559c\u5267 \u52a8\u753b \u5192\u9669 \/ \u4e01\u4eae \u6797\u6c47\u8fbe \/ \u5f20\u4f1f \u5f20\u79c9\u541b", "id": "27176717", "title": "\u718a\u51fa\u6ca1\u00b7\u53d8\u5f62\u8bb0", "label": null, "actors": ["\u5f20\u4f1f", "\u5f20\u79c9\u541b", "\u8c2d\u7b11"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": false, "price": null, "date": null, "info": "\u4e2d\u56fd\u5927\u9646 \/ \u559c\u5267 \u52a8\u753b \u5192\u9669 \/ \u4e01\u4eae \/ \u5f20\u4f1f \u5f20\u79c9\u541b", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/27176717\/", "release_date": "02.16", "cover": { "url": "https://img3.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2506889386.jpg", "width": 1500, "shape": "rectangle", "height": 2100 }, "uri": "douban:\/\/douban.com\/movie\/27176717", "subtype": "", "directors": ["\u4e01\u4eae"], "reviewer_name": "", "null_rating_reason": "" }, { "original_price": null, "rating": { "count": 45278, "max": 10, "value": 4.7 }, "actions": [], "year": "2018", "card_subtitle": "2018 \/ \u4e2d\u56fd\u5927\u9646 \u9999\u6e2f \/ \u559c\u5267 \u7231\u60c5 \u5947\u5e7b \/ \u90d1\u4fdd\u745e \/ \u90ed\u5bcc\u57ce \u51af\u7ecd\u5cf0", "id": "25829175", "title": "\u897f\u6e38\u8bb0\u5973\u513f\u56fd", "label": null, "actors": ["\u90ed\u5bcc\u57ce", "\u51af\u7ecd\u5cf0", "\u8d75\u4e3d\u9896"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": false, "price": null, "date": null, "info": "\u4e2d\u56fd\u5927\u9646 \u9999\u6e2f \/ \u559c\u5267 \u7231\u60c5 \u5947\u5e7b \/ \u90d1\u4fdd\u745e \/ \u90ed\u5bcc\u57ce \u51af\u7ecd\u5cf0", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/25829175\/", "release_date": "02.16", "cover": { "url": "https://img3.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2511375626.jpg", "width": 5906, "shape": "rectangle", "height": 8268 }, "uri": "douban:\/\/douban.com\/movie\/25829175", "subtype": "", "directors": ["\u90d1\u4fdd\u745e"], "reviewer_name": "", "null_rating_reason": "" }, { "original_price": null, "rating": { "count": 3826, "max": 10, "value": 8.3 }, "actions": [], "year": "2017", "card_subtitle": "2017 \/ \u610f\u5927\u5229 \u6cd5\u56fd \u7f8e\u56fd \/ \u5267\u60c5 \u559c\u5267 \u7231\u60c5 \/ \u4fdd\u7f57\u00b7\u7ef4\u5c14\u9f50 \/ \u6d77\u4f26\u00b7\u7c73\u4f26 \u5510\u7eb3\u5fb7\u00b7\u8428\u745f\u5170", "id": "3036465", "title": "\u7231\u5728\u8bb0\u5fc6\u6d88\u901d\u524d", "label": null, "actors": ["\u6d77\u4f26\u00b7\u7c73\u4f26", "\u5510\u7eb3\u5fb7\u00b7\u8428\u745f\u5170", "\u7b80\u00b7\u9ed8\u52d2\u5c3c"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": false, "price": null, "date": null, "info": "\u610f\u5927\u5229 \u6cd5\u56fd \u7f8e\u56fd \/ \u5267\u60c5 \u559c\u5267 \u7231\u60c5 \/ \u4fdd\u7f57\u00b7\u7ef4\u5c14\u9f50 \/ \u6d77\u4f26\u00b7\u7c73\u4f26 \u5510\u7eb3\u5fb7\u00b7\u8428\u745f\u5170", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/3036465\/", "release_date": "02.23", "cover": { "url": "https://img3.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2513341534.jpg", "width": 2292, "shape": "rectangle", "height": 3511 }, "uri": "douban:\/\/douban.com\/movie\/3036465", "subtype": "", "directors": ["\u4fdd\u7f57\u00b7\u7ef4\u5c14\u9f50"], "reviewer_name": "", "null_rating_reason": "" }, { "original_price": null, "rating": { "count": 1640, "max": 10, "value": 6.9 }, "actions": [], "year": "2017", "card_subtitle": "2017 \/ \u7f8e\u56fd \u52a0\u62ff\u5927 \/ \u559c\u5267 \u52a8\u753b \u5192\u9669 \/ \u6770\u68ee\u00b7\u897f\u68ee \/ \u5965\u5353\u00b7\u963f\u675c\u5df4 \u827e\u7c73\u8389\u00b7\u5e03\u6717\u7279", "id": "26176481", "title": "\u5c0f\u9a6c\u5b9d\u8389\u5927\u7535\u5f71", "label": null, "actors": ["\u5965\u5353\u00b7\u963f\u675c\u5df4", "\u827e\u7c73\u8389\u00b7\u5e03\u6717\u7279", "\u963f\u4ec0\u8389\u00b7\u9c8d\u5c14"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": false, "price": null, "date": null, "info": "\u7f8e\u56fd \u52a0\u62ff\u5927 \/ \u559c\u5267 \u52a8\u753b \u5192\u9669 \/ \u6770\u68ee\u00b7\u897f\u68ee \/ \u5965\u5353\u00b7\u963f\u675c\u5df4 \u827e\u7c73\u8389\u00b7\u5e03\u6717\u7279", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/26176481\/", "release_date": "02.02", "cover": { "url": "https://img1.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2512418397.jpg", "width": 1409, "shape": "rectangle", "height": 2000 }, "uri": "douban:\/\/douban.com\/movie\/26176481", "subtype": "", "directors": ["\u6770\u68ee\u00b7\u897f\u68ee"], "reviewer_name": "", "null_rating_reason": "" }], "total": 28, "subject_collection": { "subject_count": 28, "description": "", "url": "https:\/\/m.douban.com\/app_topic\/movie_showing", "uri": "douban:\/\/douban.com\/subject_collection\/movie_showing", "cover_url": "", "name": "\u5f71\u9662\u70ed\u6620", "id": "movie_showing", "display": { "layout": "grid" }, "sharing_url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/subject_collection\/movie_showing\/" }});
    mockData.push({ "count": 8, "start": 0, "subject_collection_items": [{ "original_price": null, "rating": { "count": 2229, "max": 10, "value": 8.7 }, "actions": ["\u53ef\u64ad\u653e"], "year": "2017", "card_subtitle": "2017 \/ \u65e5\u672c \/ \u5386\u53f2 \u7eaa\u5f55\u7247 \/ NHK", "id": "27112700", "title": "731\u90e8\u961f\u7684\u771f\u76f8\uff1a\u7cbe\u82f1\u201c\u533b\u8005\u201d\u4e0e\u4eba\u4f53\u8bd5\u9a8c", "label": null, "actors": [], "type": "movie", "forum_info": null, "description": "", "has_linewatch": true, "price": null, "date": null, "info": "\u65e5\u672c \/ \u5386\u53f2 \u7eaa\u5f55\u7247 \/ NHK \/ ", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/27112700\/", "release_date": "08.13", "cover": { "url": "https://img3.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2496324933.jpg", "width": 796, "shape": "rectangle", "height": 1213 }, "uri": "douban:\/\/douban.com\/movie\/27112700", "subtype": "", "directors": ["NHK"], "reviewer_name": "", "null_rating_reason": "" }, { "original_price": null, "rating": { "count": 2552, "max": 10, "value": 8.2 }, "actions": ["\u53ef\u64ad\u653e"], "year": "2017", "card_subtitle": "2017 \/ \u4e2d\u56fd\u5927\u9646 \/ \u52a8\u753b \u77ed\u7247 \/ \u5f6d\u64ce\u653f \/ \u738b\u6893 \u5b5f\u7965\u9f99", "id": "27142213", "title": "\u996e\u6e56\u4e0a\u521d\u6674\u540e\u96e8", "label": null, "actors": ["\u738b\u6893", "\u5b5f\u7965\u9f99", "\u82cf\u946b"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": true, "price": null, "date": null, "info": "\u4e2d\u56fd\u5927\u9646 \/ \u52a8\u753b \u77ed\u7247 \/ \u5f6d\u64ce\u653f \/ \u738b\u6893 \u5b5f\u7965\u9f99", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/27142213\/", "release_date": "10.10", "cover": { "url": "https://img1.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2500693108.jpg", "width": 1080, "shape": "rectangle", "height": 1620 }, "uri": "douban:\/\/douban.com\/movie\/27142213", "subtype": "", "directors": ["\u5f6d\u64ce\u653f"], "reviewer_name": "", "null_rating_reason": "" }, { "original_price": null, "rating": { "count": 1419, "max": 10, "value": 8.6 }, "actions": ["\u53ef\u64ad\u653e"], "year": "2017", "card_subtitle": "2017 \/ \u4e2d\u56fd\u5927\u9646 \/ \u5267\u60c5 \u513f\u7ae5 \u77ed\u7247 \/ \u5f6d\u64ce\u653f \/ \u738b\u8861 \u6b66\u5411\u5f64", "id": "27043672", "title": "\u6e38\u5b50\u541f", "label": null, "actors": ["\u738b\u8861", "\u6b66\u5411\u5f64", "\u5218\u5723\u535a"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": true, "price": null, "date": null, "info": "\u4e2d\u56fd\u5927\u9646 \/ \u5267\u60c5 \u513f\u7ae5 \u77ed\u7247 \/ \u5f6d\u64ce\u653f \/ \u738b\u8861 \u6b66\u5411\u5f64", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/27043672\/", "release_date": "05.14", "cover": { "url": "https://img3.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2459201111.jpg", "width": 3000, "shape": "rectangle", "height": 4500 }, "uri": "douban:\/\/douban.com\/movie\/27043672", "subtype": "", "directors": ["\u5f6d\u64ce\u653f"], "reviewer_name": "", "null_rating_reason": "" }, { "original_price": null, "rating": { "count": 249, "max": 10, "value": 6.8 }, "actions": ["\u53ef\u64ad\u653e"], "year": "2018", "card_subtitle": "2018 \/ \u4e2d\u56fd\u5927\u9646 \/ \u559c\u5267 \u77ed\u7247 \u97f3\u4e50 \/ \u66fe\u56fd\u7965 \/ \u9093\u8d85 \u5f20\u4e00\u5c71", "id": "27663838", "title": "2018\u628a\u4e50\u5e26\u56de\u5bb6", "label": null, "actors": ["\u9093\u8d85", "\u5f20\u4e00\u5c71", "\u5468\u51ac\u96e8"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": true, "price": null, "date": null, "info": "\u4e2d\u56fd\u5927\u9646 \/ \u559c\u5267 \u77ed\u7247 \u97f3\u4e50 \/ \u66fe\u56fd\u7965 \/ \u9093\u8d85 \u5f20\u4e00\u5c71", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/27663838\/", "release_date": "01.15", "cover": { "url": "https://img3.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2510426134.jpg", "width": 1624, "shape": "rectangle", "height": 1815 }, "uri": "douban:\/\/douban.com\/movie\/27663838", "subtype": "", "directors": ["\u66fe\u56fd\u7965"], "reviewer_name": "", "null_rating_reason": "" }, { "original_price": null, "rating": { "count": 424, "max": 10, "value": 6.2 }, "actions": ["\u53ef\u64ad\u653e"], "year": "2017", "card_subtitle": "2017 \/ \u4e2d\u56fd\u5927\u9646 \/ \u77ed\u7247 \/ \u8def\u9633 \u8bb8\u5b8f\u5b87 \u6768\u5b50 \u9e4f\u98de \u5e38\u5f81 \/ \u9ec4\u8f69 \u8d75\u4e3d\u9896", "id": "27591954", "title": "2017\u6700\u7f8e\u8868\u6f14", "label": null, "actors": ["\u9ec4\u8f69", "\u8d75\u4e3d\u9896", "\u5f20\u4e00\u5c71"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": true, "price": null, "date": null, "info": "\u4e2d\u56fd\u5927\u9646 \/ \u77ed\u7247 \/ \u8def\u9633 \/ \u9ec4\u8f69 \u8d75\u4e3d\u9896", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/27591954\/", "release_date": "12.18", "cover": { "url": "https://img3.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2506093443.jpg", "width": 1786, "shape": "rectangle", "height": 2500 }, "uri": "douban:\/\/douban.com\/movie\/27591954", "subtype": "", "directors": ["\u8def\u9633"], "reviewer_name": "", "null_rating_reason": "" }, { "original_price": null, "rating": { "count": 241, "max": 10, "value": 8.6 }, "actions": ["\u53ef\u64ad\u653e"], "year": "2017", "card_subtitle": "2017 \/ \u4e2d\u56fd\u5927\u9646 \/ \u7eaa\u5f55\u7247 \/ \u4f55\u601d\u601d \/ \u5f90\u6d69\u5cf0 \u5ed6\u51e1", "id": "27606997", "title": "\u631f\u5200\u63c9\u624b", "label": null, "actors": ["\u5f90\u6d69\u5cf0", "\u5ed6\u51e1", "\u5b8b\u4f73"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": true, "price": null, "date": null, "info": "\u4e2d\u56fd\u5927\u9646 \/ \u7eaa\u5f55\u7247 \/ \u4f55\u601d\u601d \/ \u5f90\u6d69\u5cf0 \u5ed6\u51e1", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/27606997\/", "release_date": "12.18", "cover": { "url": "https://img3.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2507983941.jpg", "width": 1080, "shape": "rectangle", "height": 1509 }, "uri": "douban:\/\/douban.com\/movie\/27606997", "subtype": "", "directors": ["\u4f55\u601d\u601d"], "reviewer_name": "", "null_rating_reason": "" }, { "original_price": null, "rating": { "count": 1443, "max": 10, "value": 9.0 }, "actions": ["\u53ef\u64ad\u653e"], "year": "2017", "card_subtitle": "2017 \/ \u65e5\u672c \/ \u5267\u60c5 \u52a8\u753b \/ \u5927\u68ee\u8d35\u5f18 \u51fa\u5408\u5c0f\u90fd\u7f8e \/ \u795e\u8c37\u6d69\u53f2 \u4e95\u4e0a\u548c\u5f66", "id": "27017278", "title": "\u590f\u76ee\u53cb\u4eba\u5e10 \u7b2c\u4e94\u5b63 \u7279\u522b\u7bc7 \u6e38\u620f\u76db\u5bb4", "label": null, "actors": ["\u795e\u8c37\u6d69\u53f2", "\u4e95\u4e0a\u548c\u5f66", "\u6728\u6751\u826f\u5e73"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": true, "price": null, "date": null, "info": "\u65e5\u672c \/ \u5267\u60c5 \u52a8\u753b \/ \u5927\u68ee\u8d35\u5f18 \/ \u795e\u8c37\u6d69\u53f2 \u4e95\u4e0a\u548c\u5f66", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/27017278\/", "release_date": "04.26", "cover": { "url": "https://img3.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2455096331.jpg", "width": 1176, "shape": "rectangle", "height": 1500 }, "uri": "douban:\/\/douban.com\/movie\/27017278", "subtype": "", "directors": ["\u5927\u68ee\u8d35\u5f18"], "reviewer_name": "", "null_rating_reason": "" }, { "original_price": null, "rating": { "count": 100087, "max": 10, "value": 7.0 }, "actions": ["\u53ef\u64ad\u653e"], "year": "2017", "card_subtitle": "2017 \/ \u6cd5\u56fd \/ \u52a8\u4f5c \u79d1\u5e7b \u5192\u9669 \/ \u5415\u514b\u00b7\u8d1d\u677e \/ \u6234\u6069\u00b7\u5fb7\u54c8\u6069 \u5361\u62c9\u00b7\u8fea\u74e6\u4f0a", "id": "11502973", "title": "\u661f\u9645\u7279\u5de5\uff1a\u5343\u661f\u4e4b\u57ce", "label": null, "actors": ["\u6234\u6069\u00b7\u5fb7\u54c8\u6069", "\u5361\u62c9\u00b7\u8fea\u74e6\u4f0a", "\u514b\u91cc\u592b\u00b7\u6b27\u6587"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": true, "price": null, "date": null, "info": "\u6cd5\u56fd \/ \u52a8\u4f5c \u79d1\u5e7b \u5192\u9669 \/ \u5415\u514b\u00b7\u8d1d\u677e \/ \u6234\u6069\u00b7\u5fb7\u54c8\u6069 \u5361\u62c9\u00b7\u8fea\u74e6\u4f0a", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/11502973\/", "release_date": "08.25", "cover": { "url": "https://img3.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2496088130.jpg", "width": 1064, "shape": "rectangle", "height": 1600 }, "uri": "douban:\/\/douban.com\/movie\/11502973", "subtype": "", "directors": ["\u5415\u514b\u00b7\u8d1d\u677e"], "reviewer_name": "", "null_rating_reason": "" }], "total": 51, "subject_collection": { "subject_count": 51, "description": "", "url": "https:\/\/m.douban.com\/app_topic\/movie_free_stream", "uri": "douban:\/\/douban.com\/subject_collection\/movie_free_stream", "cover_url": "", "name": "\u514d\u8d39\u5728\u7ebf\u89c2\u770b\u7684\u65b0\u7247", "id": "movie_free_stream", "display": { "layout": "grid" }, "sharing_url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/subject_collection\/movie_free_stream\/" } });
    mockData.push({ "count": 8, "start": 0, "subject_collection_items": [{ "original_price": null, "rating": { "count": 342, "max": 10, "value": 5.1 }, "actions": [], "year": "2017", "card_subtitle": "2017 \/ \u7f8e\u56fd \/ \u52a8\u4f5c \/ Dimitri Logothetis \/ \u8fc8\u514b\u00b7\u6cf0\u68ee \u963f\u5170\u00b7\u83ab\u897f", "id": "26803481", "title": "\u640f\u51fb\u4e4b\u738b\uff1a\u53cd\u51fb", "label": null, "actors": ["\u8fc8\u514b\u00b7\u6cf0\u68ee", "\u963f\u5170\u00b7\u83ab\u897f", "\u54c8\u5f17\u6ce2\u00b7\u6731\u5229\u5c14\u65af\u00b7\u6bd4\u6602\u68ee"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": false, "price": null, "date": null, "info": "\u7f8e\u56fd \/ \u52a8\u4f5c \/ Dimitri Logothetis \/ \u8fc8\u514b\u00b7\u6cf0\u68ee \u963f\u5170\u00b7\u83ab\u897f", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/26803481\/", "release_date": "01.26", "cover": { "url": "https://img1.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2390292228.jpg", "width": 450, "shape": "rectangle", "height": 675 }, "uri": "douban:\/\/douban.com\/movie\/26803481", "subtype": "", "directors": ["Dimitri Logothetis"], "reviewer_name": "", "null_rating_reason": "" }, { "original_price": null, "rating": { "count": 351, "max": 10, "value": 5.8 }, "actions": ["\u53ef\u64ad\u653e"], "year": "2017", "card_subtitle": "2017 \/ \u4e2d\u56fd\u5927\u9646 \/ \u5267\u60c5 \/ \u90a2\u6f47 \/ \u795d\u5e0c\u5a1f \u679c\u6c41", "id": "27063331", "title": "\u5927\u96ea\u51ac\u81f3", "label": null, "actors": ["\u795d\u5e0c\u5a1f", "\u679c\u6c41", "\u5f20\u6850"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": true, "price": null, "date": null, "info": "\u4e2d\u56fd\u5927\u9646 \/ \u5267\u60c5 \/ \u90a2\u6f47 \/ \u795d\u5e0c\u5a1f \u679c\u6c41", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/27063331\/", "release_date": "01.25", "cover": { "url": "https://img1.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2510150169.jpg", "width": 3000, "shape": "rectangle", "height": 4200 }, "uri": "douban:\/\/douban.com\/movie\/27063331", "subtype": "", "directors": ["\u90a2\u6f47"], "reviewer_name": "", "null_rating_reason": "" }, { "original_price": null, "rating": { "count": 515, "max": 10, "value": 7.8 }, "actions": [], "year": "2016", "card_subtitle": "2016 \/ \u6cd5\u56fd \/ \u5267\u60c5 \u52a8\u753b \/ S\u00e9bastien Laudenbach \/ \u963f\u5a1c\u4f0a\u65af\u00b7\u5fb7\u7a46\u65af\u8482\u57c3 \u6770\u745e\u7c73\u00b7\u57c3\u5c14\u5361\u4f0a\u59c6", "id": "26785137", "title": "\u65e0\u624b\u7684\u5c11\u5973", "label": null, "actors": ["\u963f\u5a1c\u4f0a\u65af\u00b7\u5fb7\u7a46\u65af\u8482\u57c3", "\u6770\u745e\u7c73\u00b7\u57c3\u5c14\u5361\u4f0a\u59c6", "\u83f2\u5229\u666e\u00b7\u52b3\u767b\u5df4\u8d6b"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": false, "price": null, "date": null, "info": "\u6cd5\u56fd \/ \u5267\u60c5 \u52a8\u753b \/ S\u00e9bastien Laudenbach \/ \u963f\u5a1c\u4f0a\u65af\u00b7\u5fb7\u7a46\u65af\u8482\u57c3 \u6770\u745e\u7c73\u00b7\u57c3\u5c14\u5361\u4f0a\u59c6", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/26785137\/", "release_date": "05.12", "cover": { "url": "https://img1.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2395033189.jpg", "width": 2700, "shape": "rectangle", "height": 3600 }, "uri": "douban:\/\/douban.com\/movie\/26785137", "subtype": "", "directors": ["S\u00e9bastien Laudenbach"], "reviewer_name": "", "null_rating_reason": "" }, { "original_price": null, "rating": { "count": 299, "max": 10, "value": 5.3 }, "actions": ["\u53ef\u64ad\u653e"], "year": "2017", "card_subtitle": "2017 \/ \u4e2d\u56fd\u5927\u9646 \/ \u60ac\u7591 \u60ca\u609a \/ \u9ec4\u6cb3 \/ \u595a\u7f8e\u4e3d \u4e91\u7fd4", "id": "27195090", "title": "\u7b14\u4ed9\u5927\u6218\u8d1e\u5b502", "label": null, "actors": ["\u595a\u7f8e\u4e3d", "\u4e91\u7fd4", "\u6731\u5a05"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": true, "price": null, "date": null, "info": "\u4e2d\u56fd\u5927\u9646 \/ \u60ac\u7591 \u60ca\u609a \/ \u9ec4\u6cb3 \/ \u595a\u7f8e\u4e3d \u4e91\u7fd4", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/27195090\/", "release_date": "11.17", "cover": { "url": "https://img3.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2505070842.jpg", "width": 1200, "shape": "rectangle", "height": 1768 }, "uri": "douban:\/\/douban.com\/movie\/27195090", "subtype": "", "directors": ["\u9ec4\u6cb3"], "reviewer_name": "", "null_rating_reason": "" }, { "original_price": null, "rating": { "count": 615, "max": 10, "value": 8.2 }, "actions": [], "year": "2018", "card_subtitle": "2018 \/ \u7f8e\u56fd \/ \u79d1\u5e7b \u60ca\u609a \/ \u4e9a\u5386\u514b\u65af\u00b7\u52a0\u5170 \/ \u5a1c\u5854\u8389\u00b7\u6ce2\u7279\u66fc \u8a79\u59ae\u5f17\u00b7\u6770\u68ee\u00b7\u674e", "id": "26384741", "title": "\u6e6e\u706d", "label": null, "actors": ["\u5a1c\u5854\u8389\u00b7\u6ce2\u7279\u66fc", "\u8a79\u59ae\u5f17\u00b7\u6770\u68ee\u00b7\u674e", "\u5965\u65af\u5361\u00b7\u4f0a\u8428\u514b"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": false, "price": null, "date": null, "info": "\u7f8e\u56fd \/ \u79d1\u5e7b \u60ca\u609a \/ \u4e9a\u5386\u514b\u65af\u00b7\u52a0\u5170 \/ \u5a1c\u5854\u8389\u00b7\u6ce2\u7279\u66fc \u8a79\u59ae\u5f17\u00b7\u6770\u68ee\u00b7\u674e", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/26384741\/", "release_date": null, "cover": { "url": "https://img3.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2509789462.jpg", "width": 1312, "shape": "rectangle", "height": 2048 }, "uri": "douban:\/\/douban.com\/movie\/26384741", "subtype": "", "directors": ["\u4e9a\u5386\u514b\u65af\u00b7\u52a0\u5170"], "reviewer_name": "", "null_rating_reason": "" }, { "original_price": null, "rating": { "count": 1319, "max": 10, "value": 8.6 }, "actions": [], "year": "2017", "card_subtitle": "2017 \/ \u65e5\u672c \/ \u52a8\u753b \u5947\u5e7b \/ \u3044\u3057\u3065\u304b\u3042\u3064\u3053 \/ \u677e\u5ca1\u798e\u4e1e \u8305\u91ce\u611b\u8863", "id": "26837952", "title": "\u6e38\u620f\u4eba\u751fZERO", "label": null, "actors": ["\u677e\u5ca1\u798e\u4e1e", "\u8305\u91ce\u611b\u8863", "\u65e5\u7b20\u967d\u5b50"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": false, "price": null, "date": null, "info": "\u65e5\u672c \/ \u52a8\u753b \u5947\u5e7b \/ \u3044\u3057\u3065\u304b\u3042\u3064\u3053 \/ \u677e\u5ca1\u798e\u4e1e \u8305\u91ce\u611b\u8863", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/26837952\/", "release_date": null, "cover": { "url": "https://img3.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2441007626.jpg", "width": 2253, "shape": "rectangle", "height": 3116 }, "uri": "douban:\/\/douban.com\/movie\/26837952", "subtype": "", "directors": ["\u3044\u3057\u3065\u304b\u3042\u3064\u3053"], "reviewer_name": "", "null_rating_reason": "" }, { "original_price": null, "rating": { "count": 5397, "max": 10, "value": 8.1 }, "actions": [], "year": "2017", "card_subtitle": "2017 \/ \u82f1\u56fd \u6cd5\u56fd \/ \u559c\u5267 \u4f20\u8bb0 \u5386\u53f2 \/ \u963f\u5c14\u66fc\u591a\u00b7\u4f0a\u5b89\u52aa\u5947 \/ \u5b89\u5fb7\u4e3d\u4e9a\u00b7\u745e\u65af\u6ce2\u7f57\u683c \u8a79\u68ee\u00b7\u827e\u8428\u514b", "id": "26779885", "title": "\u65af\u5927\u6797\u4e4b\u6b7b", "label": null, "actors": ["\u5b89\u5fb7\u4e3d\u4e9a\u00b7\u745e\u65af\u6ce2\u7f57\u683c", "\u8a79\u68ee\u00b7\u827e\u8428\u514b", "\u6b27\u5609\u00b7\u67ef\u745e\u5170\u5bc7"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": false, "price": null, "date": null, "info": "\u82f1\u56fd \u6cd5\u56fd \/ \u559c\u5267 \u4f20\u8bb0 \u5386\u53f2 \/ \u963f\u5c14\u66fc\u591a\u00b7\u4f0a\u5b89\u52aa\u5947 \/ \u5b89\u5fb7\u4e3d\u4e9a\u00b7\u745e\u65af\u6ce2\u7f57\u683c \u8a79\u68ee\u00b7\u827e\u8428\u514b", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/26779885\/", "release_date": "09.08", "cover": { "url": "https://img3.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2386120724.jpg", "width": 1535, "shape": "rectangle", "height": 1989 }, "uri": "douban:\/\/douban.com\/movie\/26779885", "subtype": "", "directors": ["\u963f\u5c14\u66fc\u591a\u00b7\u4f0a\u5b89\u52aa\u5947"], "reviewer_name": "", "null_rating_reason": "" }, { "original_price": null, "rating": { "count": 990, "max": 10, "value": 8.3 }, "actions": [], "year": "2017", "card_subtitle": "2017 \/ \u6cd5\u56fd \u6bd4\u5229\u65f6 \/ \u559c\u5267 \u52a8\u753b \u5192\u9669 \/ \u672c\u6770\u660e\u00b7\u96f7\u5185 \u5e15\u7279\u91cc\u514b\u00b7\u82f1\u4f2f\u7279 \/ \u7eaa\u5c27\u59c6\u00b7\u8fbe\u5c14\u8bfa \u5e2d\u7433\u00b7\u8363\u7279", "id": "27042405", "title": "\u5927\u574f\u72d0\u72f8\u7684\u6545\u4e8b", "label": null, "actors": ["\u7eaa\u5c27\u59c6\u00b7\u8fbe\u5c14\u8bfa", "\u5e2d\u7433\u00b7\u8363\u7279", "\u8fbe\u7c73\u5b89\u00b7\u7ef4\u7279\u5361"], "type": "movie", "forum_info": null, "description": "", "has_linewatch": false, "price": null, "date": null, "info": "\u6cd5\u56fd \u6bd4\u5229\u65f6 \/ \u559c\u5267 \u52a8\u753b \u5192\u9669 \/ \u672c\u6770\u660e\u00b7\u96f7\u5185 \/ \u7eaa\u5c27\u59c6\u00b7\u8fbe\u5c14\u8bfa \u5e2d\u7433\u00b7\u8363\u7279", "url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/movie\/27042405\/", "release_date": "03.16", "cover": { "url": "https://img3.doubanio.com\/view\/photo\/m_ratio_poster\/public\/p2513435650.jpg", "width": 1500, "shape": "rectangle", "height": 2222 }, "uri": "douban:\/\/douban.com\/movie\/27042405", "subtype": "", "directors": ["\u672c\u6770\u660e\u00b7\u96f7\u5185"], "reviewer_name": "", "null_rating_reason": "" }], "total": 1161, "subject_collection": { "subject_count": 1161, "description": "", "url": "https:\/\/m.douban.com\/app_topic\/movie_latest", "uri": "douban:\/\/douban.com\/subject_collection\/movie_latest", "cover_url": "", "name": "\u8fd1\u671f\u70ed\u95e8\u7535\u5f71", "id": "movie_latest", "display": { "layout": "grid" }, "sharing_url": "https:\/\/www.douban.com\/doubanapp\/dispatch?uri=\/subject_collection\/movie_latest\/" } })
    this.setData({
      movieList: mockData
    });
    let color = ['#FF4055', '#4F9DED', '#FFC46C', '#2384E8', '#42BD56', '#CC3344', '#FFAC2D', '#3BA94D'];
    let themeName = [
      {
        title: '同时入选IMDB250和豆瓣电影250的电影',
        id: ''
      }, 
      {
        title: '带你进入不正常的世界',
        id: ''
      }, 
      {
        title: '用电【影】来祭奠逝去的岁月',
        id: ''
      },
      {
        title: '女孩们的故事【电影】',
        id: ''
      },
      {
        title: '使用 App 【找电影】功能',
        id: ''
      },
      {
        title: '科幻是未来的钥匙——科幻启示录【科幻题材】',
        id: ''
      }
    ]
    let arr = []
    for(let item of themeName) {
      arr.push({
        title: item.title,
        color: color[parseInt(Math.random() * 8, 10)]
      })
    }
    this.setData({
      finderList: arr
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})