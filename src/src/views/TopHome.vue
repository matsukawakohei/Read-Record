<template>
<div classs="list">
    <p>{{ bookCount }}件の読書情報が記録されています。</p>
    <!-- :はv-bindの省略記法 -->
    <BookInfo v-for="(book, i) of books"
        :linkable="true" :book="book" :index="i + 1" :key="book.isbn">
    </BookInfo>
    <div>
        <el-pagination background layout="prev, pager, next"
            :total="bookCount" :page-size="3" @current-change="onchange">
        </el-pagination>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import BookInfo from '@/views/BookInfo.vue'

export default {
  name: 'TopHome',
  data() {
    return {
      books: []
    }
  },
  components: {
    BookInfo
  },
  computed: mapGetters(['bookCount', 'getRangeByPage']),
  methods: {
    onchange(page) {
      this.books = this.getRangeByPage(page)
    }
  },
  mounted() {
    this.books = this.getRangeByPage(1)
  }
}
</script>
