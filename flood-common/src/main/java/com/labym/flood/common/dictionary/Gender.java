package com.labym.flood.common.dictionary;

public enum Gender {
    MALE,
    FEMALE,
    UNKNOWN;
    private String shortName;



    static {
        MALE.shortName = "M";
        FEMALE.shortName = "F";
        UNKNOWN.shortName = "U";
    }

    public static Gender fromShortName(String shortName) {
        switch (shortName) {
            case "M":
                return MALE;
            case "F":
                return FEMALE;
            default:
                return UNKNOWN;
        }
    }

    @Override
    public String toString() {
        return this.shortName;
    }
}
