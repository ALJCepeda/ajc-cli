export default {
  mysql: {
    image: 'mysql:8',
    ports: [
      '3306:3306'
    ],
    volumes: [
      'mysql:/var/lib/mysql'
    ]
  },
  postgres: {
    image: 'postgres:11.6',
    ports: [
      '5432:5432'
    ],
    volumes: [
      'postgres:/var/lib/postgresql/data'
    ]
  },
  redis: {
    image: 'redist:5.0.7',
    ports: [
      '6379:6379'
    ],
    volumes: [
      'redist:/data'
    ]
  },
  elasticsearch: {
    image: 'elasticsearch:6.4.3',
    ports: [
      '9200:9200'
    ],
    volumes: [
      'elasticsearch:/usr/share/elasticsearch/data'
    ]
  }
} as Dict<DockerService>;