package com.labym.flood.domain.util;

import javax.persistence.GenerationType;

public final class FixedDBType {

    public static final Database DB_TYPE = Database.MYSQL;

    public static final String CLOB = Mysql.CLOB;

    public static final GenerationType AUTO_STRATEGY = GenerationType.IDENTITY;


    private static final DBType factory(Database database) {
        switch (database) {
            case MYSQL:
                return MYSQL;
            case POSTGRE_SQL:
                return POSTGRE_SQL;

            default:
                return DEFAULT;
        }
    }

    private static final Mysql MYSQL = new Mysql();
    private static final Default DEFAULT = new Default();
    private static final PostgreSQL POSTGRE_SQL = new PostgreSQL();


    private static final class Mysql implements DBType {
        public static final String CLOB = "text";
        public static final String DATE_TIME = "timest";
        public static final GenerationType AUTO_STRATEGY = GenerationType.IDENTITY;

        @Override
        public GenerationType autoStrategy() {
            return AUTO_STRATEGY;
        }
    }

    private static final class Default implements DBType {
        public static final String CLOB = "CLOB";
        public static final GenerationType AUTO_STRATEGY = GenerationType.AUTO;

        @Override
        public GenerationType autoStrategy() {
            return AUTO_STRATEGY;
        }
    }

    private static final class PostgreSQL implements DBType {
        public static final String CLOB = "CLOB";
        public static final GenerationType AUTO_STRATEGY = GenerationType.AUTO;

        @Override
        public GenerationType autoStrategy() {
            return AUTO_STRATEGY;
        }
    }

    interface DBType {
        GenerationType autoStrategy();
    }


}
