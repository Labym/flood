package com.labym.flood.converter;

import javax.persistence.AttributeConverter;

import javax.persistence.Converter;
import java.time.Instant;
import java.sql.Date;

@Converter(autoApply = true)
public class InstantConverter  implements AttributeConverter<Instant, Date> {
    @Override
    public Date convertToDatabaseColumn(Instant instant) {
        return instant != null ? new Date(instant.toEpochMilli()) : null;
    }

    @Override
    public Instant convertToEntityAttribute(Date date) {
        return date != null ? date.toInstant() : null;
    }
}
